/* eslint-disable spaced-comment */
const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

const app = express();
const port = process.env.PORT || 4300;

app.use(express.urlencoded({ extended: true }));

app.get('/api/getCities', async (req, res) => {
  try {
    const citiesList = await readFileAsync(
      path.join(__dirname, 'city.list.json'),
      { encoding: 'utf8' },
    );
    

    const filteredData = citiesList.filter(({ name }) => !/[^\w\s]/.test(name));

    console.log(filteredData.length);
    
    //res.status(200).send(readedFile);
  } catch (e) {
    res.status(500).json({
      message: 'Server error',
    });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
