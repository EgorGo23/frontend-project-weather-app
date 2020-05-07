import React, { useState, useEffect, useContext } from 'react';
import { store } from '../store';

const CityWeatherCard = () => {
  const wt = 'Clouds, Rain, Clear';
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  const { globalState, dispatch } = useContext(store);
  const { idSelectedCity } = globalState;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${idSelectedCity}&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`);
        const body = await response.json();
        console.log(body);
        setWeather(body);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    if (idSelectedCity) {
      fetchData();
    }
  }, [idSelectedCity]);

  return weather
  && (
  <div className="weather-card">
    <div className="weather-card__city">
      <span>{weather.name}</span>
    </div>
    <div className="weather-card__icon">
      <img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/cloudy.svg" />
    </div>
    <div className="weather-card__temp">
      <span>
        {Math.floor(weather.main.temp)}
        °
      </span>
      <span>Cloudy</span>
    </div>
    <div className="weather-card__min-max">
      <div className="min__container">
        <svg viewBox="188.5 817 21 11">
          <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow" />
        </svg>
        <span>{Math.floor(weather.main.temp_min)}</span>
        <span>Min</span>
      </div>
      <div className="max__container">
        <svg viewBox="449.5 820 21 11">
          <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow" />
        </svg>
        <span>{Math.floor(weather.main.temp_max)}</span>
        <span>Max</span>
      </div>
    </div>
    <div className="weather-card__add-city-btn">
      <button className="add-city-btn">ADD CITY +</button>
    </div>
  </div>
  );
};


export default CityWeatherCard;
