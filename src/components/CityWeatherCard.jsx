import React, { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import getCurrentWeatherData from '../getCurrentWeatherData';
import { store } from '../store';

const CityWeatherCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const { globalState, dispatch } = useContext(store);
  const { idSearchedCity } = globalState;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_SEARCH_ERROR', payload: false });
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${idSearchedCity}&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`);
        const body = await response.json();
        
        setWeatherData(getCurrentWeatherData(body));
      } catch (error) {
        dispatch({ type: 'SET_SEARCH_ERROR', payload: true });
        setWeatherData(null);
      }

      setIsLoading(false);
    };

    if (idSearchedCity) {
      fetchData();
    }
  }, [dispatch, idSearchedCity]);


  const addCitytoFav = (data) => {
    dispatch({ type: 'ADD_TO_FAV', payload: { name: data.name, id: data.id, coord: data.coord } });
    dispatch({ type: 'SELECT_FAV_CITY', payload: data });
    setWeatherData(null);
  }

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
        weatherData
        && (
          <div className={cn({
            'weather-card style-city': true,
            'style-for-short-name': (weatherData.name.length <= 16),
          })}
          >
            <div className="weather-card__city">
              <span>{weatherData.name}</span>
            </div>
            <div className="weather-card__icon">
              {weatherData.svg}
            </div>
            <div className="weather-card__temp">
              <span>
                {Math.ceil(weatherData.main.temp)}
                °
              </span>
              <span>{weatherData.weatherText}</span>
            </div>
            <div className="weather-card__min-max">
              <div className="min__container">
                <svg viewBox="188.5 817 21 11">
                  <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow" />
                </svg>
                <span>{Math.ceil(weatherData.main.temp_min)}</span>
                <span>Min</span>
              </div>
              <div className="max__container">
                <svg viewBox="449.5 820 21 11">
                  <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow" />
                </svg>
                <span>{Math.ceil(weatherData.main.temp_max)}</span>
                <span>Max</span>
              </div>
            </div>
            <div className="weather-card__add-city-btn">
              <button className="add-city-btn" onClick={() => addCitytoFav(weatherData)}>ADD CITY +</button>
            </div>
          </div>
        )
      }
    </>
  );
};


export default CityWeatherCard;
