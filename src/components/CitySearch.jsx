import React, { useState, useEffect, useContext } from 'react';
import Cities from './Cities';
import { store } from '../store';
import CityWeatherCard from './CityWeatherCard';

const CitySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPrompt, setIsPrompt] = useState(false);

  /* В numCitiesExpectFromServer хранится число городов, которое необходимо получить 
  от сервера. Изначально оно равняется 10. Но с помощью функции increaseCityCounter
  (передается в компонент Cities) оно может быть увеличено */
  const [numCitiesExpectFromServer, setNumCitiesExpectFromServer] = useState(10);

  /* Помимо самих городов(в количестве numCitiesExpectFromServer), с сервера приходит также 
  численное значение общего количества городов, подходящих под текущую query строку и 
  записывается в переменную totalNumCitiesForQuery. Это необходимо для определения того, 
  когда показывать пользавателям кнопку 'Show more'. */
  const [totalNumCitiesForQuery, setTotalNumCitiesForQuery] = useState(0);

  // Если пользователь ошибётся в написании города и нажмет enter, появится предупреждение
  const [isErrorUser, setIsErrorUser] = useState(false);

  // Получение параметров из глобального состояния
  const { globalState, dispatch } = useContext(store);
  const {
    searchText, idSearchedCity, citiesSearch, searchErrorFetch, 
  } = globalState;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_SEARCH_ERROR', payload: false });
      setIsLoading(true);

      try {
        const response = await fetch(`/api/getCities?query=${searchText}&num=${numCitiesExpectFromServer}`);
        const body = await response.json();

        if (response.status >= 500) {
          throw new Error('Server Error');
        }
        
        setTotalNumCitiesForQuery(body.transCitiesLength);
        dispatch({ type: 'CHANGE_CITIES_SEARCH_LIST', payload: body.cities });
      } catch (error) {
        dispatch({ type: 'SET_SEARCH_ERROR', payload: true });
        dispatch({ type: 'CHANGE_CITIES_SEARCH_LIST', payload: [] });
        setIsPrompt(false);
      }

      setIsLoading(false);
    }

    if (searchText.length > 0) {
      fetchData();
    }
  }, [searchText, numCitiesExpectFromServer]);

  
  const handleChange = (event) => {
    setIsPrompt(false);
    setIsErrorUser(false);

    const { value } = event.target;
    if (/[^\w\s]|\d/.test(value)) {
      return;
    }

    /* При каждом вводе символа устанавливаем число городов,
    запрашиваемых с сервера в дефолтное состояние(10). */
    dispatch({ type: 'CHANGE_TEXT', payload: value });
    setNumCitiesExpectFromServer(10);

    if (value.length === 0) {
      setIsPrompt(true);
      dispatch({ type: 'CHANGE_CITIES_SEARCH_LIST', payload: [] });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (citiesSearch.length !== 0) {
      dispatch({ type: 'ADD_ID_SEARCHED_CITY', payload: citiesSearch[0].id });
      dispatch({ type: 'CHANGE_TEXT', payload: '' });
      dispatch({ type: 'CHANGE_CITIES_SEARCH_LIST', payload: [] });
    } else {
      setIsErrorUser(true);
      dispatch({ type: 'CHANGE_TEXT', payload: '' });
    }
  }
  console.log()
  const increaseCityCounter = (value) => {
    setNumCitiesExpectFromServer(numCitiesExpectFromServer + value);
  }

  return (
    <div className="city-search-wrapper">
      <div className="city-search-header">
        <h3 className="city-search-title">SEARCH CITIES</h3>
        <form onSubmit={(event) => handleSubmit(event)} className="search-city-input-wrapper">
          <input className="search-city-input" onFocus={() => setIsPrompt(true)} value={searchText} onBlur={() => setIsPrompt(false)} onChange={handleChange} placeholder="search city" />
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
          isPrompt && !idSearchedCity && !searchErrorFetch && !isErrorUser && !searchText
          && (
            <span className="city-search-prompt">Enter the city name in English</span>
          )
        }
        {
          isErrorUser && !searchErrorFetch
          && (
            <span className="city-search-header-error-user">
              City not found, enter the correct name
            </span>
          )
        }
        {
          searchErrorFetch && !isErrorUser
          && (
            <button className="city-search-header-error-fetch" onClick={() => window.location.reload()}>
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
          citiesSearch.length > 0
          && (
            <Cities
              cities={citiesSearch}
              increaseCounter={increaseCityCounter}
              totalNumCitiesForQuery={totalNumCitiesForQuery}
            />
          )
        }
      </div>
      <div className="city-search-body">
        <CityWeatherCard />
      </div>
    </div>
  );
};

export default CitySearch;
