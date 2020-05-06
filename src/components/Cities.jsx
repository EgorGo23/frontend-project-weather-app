import React from 'react';
import PropTypes from 'prop-types';

const Cities = ({
  cities, increaseCounter, totalNumCitiesForQuery,
}) => {
  const handleClick = ({ target }) => {
    if (target.classList.contains('show-more')) {
      /* При нажатии на кнопку 'Show more':
      Если разность между общим числом городов(т.е. totalNumCitiesForQuery), содержащих
      строку query, и числом городов, пришедших с сервера меньше 10, то увеличиваем значение
      numCitiesExpectFromServer(число городов ожидаемое от сервера) на велечину разницы
      (totalNumCitiesForQuery - cities.length) */
      if (totalNumCitiesForQuery - cities.length < 10) {
        increaseCounter(totalNumCitiesForQuery - cities.length);
      } else {
        increaseCounter(10);
      }
    }
  };

  return (
    <div className="cities">
      <ul onClick={(event) => handleClick(event)}>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name}
          </li>
        ))}
        {
          (totalNumCitiesForQuery - cities.length > 0)
          && <li className="show-more">Show more</li>
        }
      </ul>
    </div>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseCounter: PropTypes.func.isRequired,
  totalNumCitiesForQuery: PropTypes.number.isRequired,
};


export default Cities;
