import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { store } from '../store';

const Cities = ({
  cities, increaseCounter, totalNumCitiesForQuery,
}) => {
  const { dispatch } = useContext(store);

  const handleClickShowMore = ({ target }) => {
    if (target.classList.contains('cities__show-more')) {
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

  const handleClickGetId = (id) => {
    dispatch({ type: 'ADD_ID', payload: id });
    dispatch({ type: 'CHANGE_TEXT', payload: '' });
    dispatch({ type: 'CHANGE_CITIES_SEARCH_LIST', payload: [] });
  };

  return (
    <div className="cities">
      <ul className="cities__list">
        {cities.map((city) => (
          <li key={city.id} className="cities__item" onClick={() => handleClickGetId(city.id)}>
            {city.name}
          </li>
        ))}
        {
          (totalNumCitiesForQuery - cities.length > 0)
          && (
          <li className="cities__show-more" onClick={(event) => handleClickShowMore(event)}>
            Show more
          </li>
          )
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
