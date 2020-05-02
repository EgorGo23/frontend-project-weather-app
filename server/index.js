const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const getFormattedListOfCities = require('./getFormattedListOfCities');

const readFileAsync = promisify(fs.readFile);

const app = express();
const port = process.env.PORT || 4300;

let uploadedData = null;

(async () => {
  try {
    const cities = await readFileAsync(
      path.join(__dirname, 'data', 'city.list.json'),
      { encoding: 'utf8' },
    );
    const sortedUniqCitiesInLatinWithSpaces = getFormattedListOfCities(cities);

    // const listRanges = [];
    // let letter = 'a';
    // let min = null;
    // let max = null;
    // sortedUniqCitiesInLatinWithSpaces.forEach(({ name }) => {
    //   const letter = '';
    //   const min = null;
    //   const max = null;
    // });


    uploadedData = sortedUniqCitiesInLatinWithSpaces;
    console.log(uploadedData.length);
    console.log(uploadedData.filter(({name}) => /\d/.test(name.toLowerCase())).length);
    console.log(`${122159-24}`);
    console.log(/\d/.test(uploadedData[0].name));
  } catch (error) {
    uploadedData = null;
  }
})();

app.get('/api/getCities', (req, res) => {
  if (uploadedData) {
    const { query } = req.query;
    if (query.length > 0) {
      const transData = uploadedData.filter(({ name }) => name.toLowerCase().startsWith(`${query.toLowerCase()}`));
      res.status(200).send(JSON.stringify(transData));
    }
  } else {
    res.status(500).json({
      message: 'Server error',
    });
  }
});




app.listen(port, () => console.log(`Listening on port ${port}`));


