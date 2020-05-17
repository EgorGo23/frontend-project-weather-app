const express = require('express');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const getFormattedListOfCities = require('./getFormattedListOfCities');
const getRangeIndices = require('./getRangeIndices');

const readFileAsync = promisify(fs.readFile);

const app = express();
const port = process.env.PORT || 4300;
app.use(express.static(path.join(__dirname, '..', 'public')));

/* Переменна для хранения прочитанных и форматированных данных из базы */
let uploadedData = null;
/* В indexRanges хранятся индексы начала и конца списка городов, начинающихся с query
Например, если query='m', то indexRanges выглядит как { 'm': [start, end] } */
let indexRanges = null;

/* При запуске сервера происходит чтение файла данных 'city.list.json', который
хранит список городов в виде массива объектов. С помощью функции getFormattedListOfCities
данные приводятся к нужному виду:
 - удаляются города, название которых, содержат цифры или нелатинские буквы.
 - города сортируются по алфавиту.

Далее, в соответствии с форматированным списком городов, функция getRangeIndices
создает объект, в котором содержатся индексы начала и конца первой буквы
названия каждого города в алфавитном порядке.

В результате работы IIFE функции заполняются переменные uploadedData и indexRanges,
необходимые для работы алгоритмы обработки get-запросов.
*/
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


/* Переменные, используемые для отправки данных.
transCities - города, отправляемые с сервера
transCitiesLength - общие число городов, подходящих под query */
let transCities = null;
let transCitiesLength = null;

app.get('/api/getCities', (req, res) => {
  if (uploadedData) {
    // num - количество городов, требуемое клиентом.
    const { query, num } = req.query;
    if (query.length === 1) {
      /* Получаем индексы начала и конца списка городов, начинающихся с query
      Например, если query='m', то indexRanges выглядит как { 'm': [start, end] } */
      const indexRangeForQuery = indexRanges[query];

      // Из общего списка берем города, начинающиеся с query
      const listCitiesForQuery = uploadedData
        .slice(indexRangeForQuery[0], indexRangeForQuery[1] + 1);

      transCities = listCitiesForQuery;
      transCitiesLength = transCities.length;

      // Отправляем на клиент num первых элементов списка городов и длину самого списка
      res.status(200)
        .send(JSON.stringify({
          cities: transCities.slice(0, num),
          transCitiesLength,
        }));
    } else {
      /* Когда query.length > 1, фильтрация городов просиходит по списку,
      сформированному при query.length === 1. */
      const transCitiesForMoreThanOneChar = transCities.filter(({ name }) => name.toLowerCase().startsWith(`${query.toLowerCase()}`));
      transCitiesLength = transCitiesForMoreThanOneChar.length;

      // Отправляем на клиент num первых элементов списка городов и длину самого списка
      res.status(200)
        .send(JSON.stringify({
          cities: transCitiesForMoreThanOneChar.slice(0, num),
          transCitiesLength,
        }));
    }
  } else {
    res.status(500).json({
      message: 'Server error',
    });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
