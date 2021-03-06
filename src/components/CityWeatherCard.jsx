import React, { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import getWeatherData from '../getWeatherData';
import { store } from '../store';

const CityWeatherCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const { globalState, dispatch } = useContext(store);
  const { idSearchedCity, searchText } = globalState;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_SEARCH_ERROR', payload: false });
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${idSearchedCity}&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`);
        const body = await response.json();

        setWeatherData(getWeatherData(body));
      } catch (error) {
        dispatch({ type: 'SET_SEARCH_ERROR', payload: true });
        setWeatherData(null);
      }

      setIsLoading(false);
    };

    if (idSearchedCity) {
      fetchData();
    }
  }, [idSearchedCity]);


  const addCityToFav = (data) => {
    dispatch({ type: 'ADD_TO_FAV', payload: { name: data.name, id: data.id, coord: data.coord } });
    dispatch({ type: 'ADD_ID_SEARCHED_CITY', payload: null });
    setWeatherData(null);
  };

  return (
    <>
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
        (weatherData && searchText === '')
        && (
        <div className={cn({
          'weather-card': true,
        })}
        >
          <div className={cn({
            'weather-card__city': true,
            'long-name': (weatherData.name.length >= 16),
            'small-name': (weatherData.name.length <= 6),
          })}
          >
            <span>{weatherData.name}</span>
          </div>

          <div className={cn({
            'weather-card__icon': true,
            'svg-extra-long-name': weatherData.name.length >= 22,
          })}
          >
            {weatherData.svg}
          </div>

          <div className="weather-card__temp">
            <span>
              {Math.round(weatherData.main.temp)}
              °
            </span>
            <span>{weatherData.weatherText}</span>
          </div>

          <div className="weather-card__min-max">
            <div className="min__container">
              <svg viewBox="188.5 817 21 11">
                <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow" />
              </svg>
              <span>{Math.round(weatherData.main.temp_min)}</span>
              <span>Min</span>
            </div>
            <div className="max__container">
              <svg viewBox="449.5 820 21 11">
                <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow" />
              </svg>
              <span>{Math.round(weatherData.main.temp_max)}</span>
              <span>Max</span>
            </div>
          </div>
          <div className="weather-card__add-city-btn">
            <button className="add-city-btn" onClick={() => addCityToFav(weatherData)}>ADD CITY +</button>
          </div>
        </div>
        )
      }
    </>
  );
};


export default CityWeatherCard;
