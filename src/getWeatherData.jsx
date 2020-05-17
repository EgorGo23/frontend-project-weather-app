import React from 'react';

const getWeatherData = ({
  weather, main = null, clouds, name = '', coord = {}, id = null, temp = null, pressure = null, humidity = null, wind_speed = null, dt_txt = null,
}) => {
  let svg = null;
  const date = new Date();

  const weatherText = weather[0].main;

  const isNight = (date.getHours() >= 0 && date.getHours() < 7);
  const isMorning = (date.getHours() >= 7 && date.getHours() < 12);
  const isDay = (date.getHours() >= 12 && date.getHours() < 19);
  const isEvening = (date.getHours() >= 19 && date.getHours() < 24);


  const isCloudy = clouds.all ? clouds.all >= 15 : clouds >= 15;
  const isRainy = (weatherText === 'Rain');
  const isSnow = (weatherText === 'Snow');

  const getTemp = (inputTemp) => {
    if (isNight) {
      return inputTemp.night;
    }
    if (isMorning) {
      return inputTemp.morn;
    }
    if (isDay) {
      return inputTemp.day;
    }
    if (isEvening) {
      return inputTemp.eve;
    }
  };

  const tempMain = temp ? {
    min: Math.round(temp.min),
    max: Math.round(temp.max),
    temp: Math.round(getTemp(temp)),
  } : null;

  if (isRainy) {
    svg = (
      <img className="city-weather-icon" alt="icon-weather" width="60" height="60" src="../../public/icons/animated/rainy-6.svg" />
    );
  } else if (isSnow) {
    svg = (
      <img className="city-weather-icon" alt="icon-weather" width="60" height="60" src="../../public/icons/animated/snowy-6.svg" />
    );
  } else if (isNight) {
    svg = isCloudy ? (
      <img className="city-weather-icon" alt="icon-weather" width="60" height="60" src="../../public/icons/animated/cloudy-night-2.svg" />
    )
      : (<img className="city-weather-icon" alt="icon-weather" width="60" height="60" src="../../public/icons/animated/night.svg" />);
  } else if (!isNight) {
    svg = isCloudy ? (
      <img className="city-weather-icon" alt="icon-weather" width="60" height="60" src="../../public/icons/animated/cloudy-day-2.svg" />
    )
      : (<img className="city-weather-icon" alt="icon-weather" width="60" height="60" src="../../public/icons/animated/day.svg" />);
  }

  return {
    name,
    weatherText,
    main,
    svg,
    coord,
    id,
    pressure: pressure ? Math.round(pressure * 0.75006375541921) : null,
    humidity,
    tempMain,
    wind: Math.round(wind_speed),
    dt_txt,
  };
};

export default getWeatherData;
