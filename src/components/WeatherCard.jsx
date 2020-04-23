import React from 'react';

const WeatherCard = () => (
  <div className="weather-card">
    <div className="weather-card__city">
      <span>Saint-Petersburg</span>
    </div>
    <div className="weather-card__icon">
      <img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/cloudy.svg" />
    </div>
    <div className="weather-card__temp">
      <span>6°</span>
      <span>Cloudy</span>
    </div>
    <div className="weather-card__min-max">
      <div className="min__container">
        <svg viewBox="188.5 817 21 11">
          <path fill="#00ff9b" d="M209.5 817.5h-21L199 828z" data-name="Min Arrow" />
        </svg>
        <span>0</span>
        <span>Min</span>
      </div>
      <div className="max__container">
        <svg viewBox="449.5 820 21 11">
          <path fill="red" d="M449.5 830.5h21L460 820z" data-name="Max Arrow" />
        </svg>
        <span>4</span>
        <span>Max</span>
      </div>
    </div>
    <div className="weather-card__add-city-btn">
      <button className="add-city-btn">ADD CITY +</button>
    </div>
  </div>
);

export default WeatherCard;
