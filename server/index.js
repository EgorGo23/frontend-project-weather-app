const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const getFormattedListOfCities = require('./getFormattedListOfCities');
const getRangeIndices = require('./getRangeIndices');

const readFileAsync = promisify(fs.readFile);

const app = express();
const port = process.env.PORT || 4300;

/*
При запуске сервера происходит чтение файла данных 'city.list.json', который
хранит список городов в виде массива объектов. С помощью функции getFormattedListOfCities
данные приводятся к нужному виду:
 - удаляются города, название которых, содержат цифры или нелатинские буквы.
 - города сортируются по алфавиту.

Далее, в соответствии с форматированным списком городов, функция getRangeIndices
создает объект, в котором содержатся индексы начала и конца первой буквы
названия каждого города в алфавитном порядке.
*/

let uploadedData = null;
let transData = null;
let indexRanges = null;

(async () => {
  try {
    const cities = await readFileAsync(
      path.join(__dirname, 'data', 'city.list.json'),
      { encoding: 'utf8' },
    );
    const sortedUniqCitiesInLatinWithSpaces = getFormattedListOfCities(cities);
    const { rangeList } = getRangeIndices(sortedUniqCitiesInLatinWithSpaces);
    indexRanges = rangeList;
    uploadedData = sortedUniqCitiesInLatinWithSpaces;
  } catch (error) {
    uploadedData = null;
  }
})();

app.get('/api/getCities', (req, res) => {
  if (uploadedData) {
    const { query } = req.query;
    if (query.length === 1) {
      // Получаем индексы начала и конца списка городов, начинающихся с query
      const indexRangeForQuery = indexRanges[query];

      // Из общего списка берем города, начинающиеся с query
      const listCitiesForQuery = uploadedData
        .slice(indexRangeForQuery[0], indexRangeForQuery[1] + 1);

      if (listCitiesForQuery.length > 10) {
        transData = listCitiesForQuery.slice(0, 10);
        const numCity = listCitiesForQuery.length;
        const numRemainCity = numCity - numCity;
      }

      res.status(200).send(JSON.stringify(transData));
    } else {
      // Когда query.length > 1, фильтрация городов просиходит по списку,
      // сформированному при query.length === 1.
      const transDataForMoreThanOneChar = transData.filter(({ name }) => name.toLowerCase().startsWith(`${query.toLowerCase()}`));
      res.status(200).send(JSON.stringify(transDataForMoreThanOneChar));
    }
  } else {
    res.status(500).json({
      message: 'Server error',
    });
  }
});


app.listen(port, () => console.log(`Listening on port ${port}`));
