/* eslint-disable spaced-comment */
const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const getFormattedListOfCities = require('./getFormattedListOfCities');

const readFileAsync = promisify(fs.readFile);

const app = express();
const port = process.env.PORT || 4300;

const getCities = async () => {
  const cities = await readFileAsync(
    path.join(__dirname, 'data', 'city.list.json'),
    { encoding: 'utf8' },
  );
  const sortedUniqCitiesInLatinWithSpaces = getFormattedListOfCities(cities);
  //throw new Error('Oops');
  return {
    sortedUniqCitiesInLatinWithSpaces,
  };
};

getCities()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('OOPS', error);
  });


app.get('/api/getCities', (req, res) => {

});

app.listen(port, () => console.log(`Listening on port ${port}`));
