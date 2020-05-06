/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import Cities from './Cities';
import CityWeatherCard from './CityWeatherCard';

const CitySearch = () => {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* В numCitiesExpectFromServer хранится число городов, которое необходимо получить 
  от сервера. Изначально оно равняется 10. Но с помощью функции increaseCityCounter
  (передается в компонент Cities) оно может быть увеличено */
  const [numCitiesExpectFromServer, setNumCitiesExpectFromServer] = useState(10);

  /* Помимо самих городов(в количестве numCitiesExpectFromServer), с сервера приходит также 
  численное значение общего количества городов, подходящих под текущую query строку и 
  записывается в переменную totalNumCitiesForQuery. Это необходимо для определения того, 
  когда показывать пользавателям кнопку 'Show more'. */
  const [totalNumCitiesForQuery, setTotalNumCitiesForQuery] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(`/api/getCities?query=${query}&num=${numCitiesExpectFromServer}`);
        const body = await response.json();

        if (response.status >= 500) {
          throw new Error('Server Error');
        }
        setTotalNumCitiesForQuery(body.transCitiesLength);
        setCities(body.cities);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    }

    if (query.length > 0) {
      fetchData();
    }
  }, [query, numCitiesExpectFromServer]);


  const handleChange = (event) => {
    const { value } = event.target;
    if (/[^\w\s]|\d/.test(value)) {
      return;
    }

    /* При каждом вводе символа устанавливаем число городов,
    запрашиваемых с сервера в дефолтное состояние(10). */
    setQuery(value);
    setNumCitiesExpectFromServer(10);

    if (value.length === 0) {
      setCities([]);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const increaseCityCounter = (value) => {
    setNumCitiesExpectFromServer(numCitiesExpectFromServer + value);
  }

  return (
    <div className="city-search-wrapper">
      <div className="city-search-header">
        <h3 className="city-search-title">SEARCH CITIES</h3>
        <form onSubmit={(event) => handleSubmit(event)} className="search-city-input-wrapper">
          <input className="search-city-input" value={query} onChange={(event) => handleChange(event)} placeholder="search city" />
          <button type="submit" className="search-city-btn">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
              <path
                fill="#FFF"
                d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"
              />
            </svg>
          </button>
        </form>
        {
          isError
          && (
            <button className="city-search-error" onClick={() => window.location.reload()}>
              <span>Error, click to reload page</span>
            </button>
          )
        }
        {
          isLoading
          && (
            <div className="preloader-wrapper">
              <div className="preloader">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          )
        }
        {
          cities.length > 0
          && (
            <Cities
              cities={cities}
              increaseCounter={increaseCityCounter}
              totalNumCitiesForQuery={totalNumCitiesForQuery}
            />
          )
        }
      </div>
      <div className="city-search-body">
        {/* <CityWeatherCard /> */}
      </div>
    </div>
  );
};

export default CitySearch;
