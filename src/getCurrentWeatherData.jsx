import React from 'react';

const getCurrentWeatherData = ({
  weather, main, clouds, name = '', coord, id
}) => {
  let svg = null;
  const date = new Date();

  const weatherText = weather[0].main;
  const isNight = (date.getHours() > 0 && date.getHours() < 7);
  const isCloudy = clouds.all !== 0;
  const isRainy = (weatherText === 'Rain');
  const isSnow = (weatherText === 'Snow');

  if (isRainy) {
    svg = (
      <img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/rainy-6.svg" />
    );
  } else if (isSnow) {
    svg = (
      <img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/snowy-6.svg" />
    );
  } else if (isNight) {
    svg = isCloudy ? (
      <img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/cloudy-night-2.svg" />
    )
      : (<img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/night.svg" />);
  } else if (!isNight) {
    svg = isCloudy ? (
      <img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/cloudy-day-2.svg" />
    )
      : (<img className="city-weather-icon" alt="icon-weather" width="130" height="130" src="../../public/icons/animated/day.svg" />);
  }

  return {
    name,
    weatherText,
    main,
    svg,
    coord,
    id,
  };
};

export default getCurrentWeatherData;
