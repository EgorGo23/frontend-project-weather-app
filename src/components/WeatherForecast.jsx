import React, { useEffect, useContext, useState } from 'react';
import { uniqueId } from 'lodash';
import cn from 'classnames';
import getWeatherData from '../getWeatherData';
import getFormattedDate from '../getFormattedDate';
import { store } from '../store';
import getWeekDay from '../getWeekDay';
import HourlyCard from './HourlyСard';
import useTimer from './useTimer';


const WeatherForecast = () => {
  const getDataForWeekly = (item) => ({
    temp_max: item.tempMain.max,
    temp_min: item.tempMain.min,
    temp: item.tempMain.temp,
    pressure: item.pressure,
    humidity: item.humidity,
    wind: item.wind,
    description: item.weatherText,
    svg: item.svg,
    text: item.dt_txt,
  });

  const getDataForHourly = (item) => ({
    temp: Math.round(item.main.temp),
    svg: item.svg,
    text: item.dt_txt,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const timer = useTimer();
  const [state, setState] = useState({
    current: null,
    weeklyData: [],
    hourlyData: [],
    day: {
      shortName: getWeekDay(new Date(), 'short'),
      longName: getWeekDay(new Date(), 'long'),
    },
  });

  const { globalState, dispatch } = useContext(store);
  const { favCities, selectedFavCity, selectedWeatherDay } = globalState;

  const {
    current, weeklyData, day, hourlyData,
  } = state;

  useEffect(() => {
    const { coord } = selectedFavCity;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`),
          fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${selectedFavCity.id}&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`),
        ]);

        const body = await Promise.all([
          response[0].json(),
          response[1].json(),
        ]);
        const weeklyData = body[0];
        const hourlyData = body[1];

        setState({
          ...state,
          current: getDataForWeekly(getWeatherData(weeklyData.daily[0])),
          weeklyData: [
            ...weeklyData.daily.slice(0, 7).map((element) => getDataForWeekly(getWeatherData(element))),
          ],
          hourlyData: [
            ...hourlyData.list.map((element) => getDataForHourly(getWeatherData(element))),
          ],
        });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [selectedFavCity]);

  const selectDay = (name) => {
    dispatch({ type: 'SELECT_WEATHER_DAY', payload: name });
  };

  const getWeeklyForecast = (list) => {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const weekForecast = [];
    let today = new Date().getDay();

    for (let i = 0; i < list.length; i++) {
      weekForecast.push({
        dayName: days[today],
        icon: list[i].svg,
        max: list[i].temp_max,
        min: list[i].temp_min,
      });
      if (today === 6) {
        today = 0;
      } else {
        today++;
      }
    }

    return weekForecast;
  };

  return (
    <>
      {
                !isLoading && !isError && favCities.length > 0 && current && (
                <div className="weather-forecast">
                  <div className="selected-city-current-data__container">
                    <div className="selected-city-wrapper">
                      <span className="city-name">{selectedFavCity.name}</span>
                      <span className="city-time">{`${day.longName} ${timer}`}</span>
                      <span className="weather-condition">{current.description}</span>
                      <div className="city-weather-data">
                        <div className="city-temp">
                          {current.svg}
                          <span className="temp-metric">{`${current.temp}°`}</span>
                        </div>
                        <div className="city-wind-hum-pres">
                          <div>
                            Pressure:
                            <span>{current.pressure}</span>
                          </div>
                          <div>
                            Humidity:
                            <span>{`${current.humidity}%`}</span>
                          </div>
                          <div>
                            Wind:
                            <span>{`${current.wind} м/c`}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="week-forecast__container">
                    {getWeeklyForecast(weeklyData).map(({
                      dayName, icon, max, min,
                    }) => (
                      <div
                        className={cn({
                          'weather-forecast-day': true,
                          'active-day': selectedWeatherDay === dayName,
                        })}
                        key={uniqueId()}
                        onClick={() => selectDay(dayName)}
                      >
                        <span className="forecast-day">{dayName}</span>
                        {icon}
                        <div className="forecast-max-min">
                          <span>{`${max}°`}</span>
                          <span>{`${min}°`}</span>
                        </div>
                      </div>
                    ))}


                  </div>
                </div>

                )
            }
      {
                isLoading && (
                <div className="preloader-wrapper daily-preloader">
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
                isError && (
                <span className="forecast-error">Error, try reloading the page</span>
                )
            }
      {
                selectedWeatherDay && favCities.length > 0 && !isLoading && !isError && <HourlyCard hourlyData={hourlyData} />
            }
    </>
  );
};

export default WeatherForecast;
