// city list formatting algorithm
const getFormattedListOfCities = (list) => JSON.parse(list)
  .reduce((acc, city) => {
    if (/[^\w\s]|\d/.test(city.name)) return acc;

    if (acc.map[city.name]) return acc;

    acc.map[city.name] = true;
    acc.cities.push(city);
    return acc;
  }, { map: {}, cities: [] })
  .cities
  .sort((city1, city2) => {
    const name1 = city1.name.toLowerCase();
    const name2 = city2.name.toLowerCase();

    if (name1 < name2) return -1;
    if (name1 > name2) return 1;

    return 0;
  });

module.exports = getFormattedListOfCities;
