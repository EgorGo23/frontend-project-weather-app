import React, { useContext, useState, useEffect } from 'react';
import cn from 'classnames';
import Header from './Header';
import CitySearch from './CitySearch';
import CitiesInfo from './CitiesInfo';
import { store } from '../store';

const App = () => {
  const { globalState } = useContext(store);
  const {
    darkMode, hourlyWeatherForSelectedDay, favCities,
  } = globalState;

  const [
    hourlyWeatherForSelectedDayLength,
    setHourlyWeatherForSelectedDayLength,
  ] = useState(hourlyWeatherForSelectedDay.length);

  useEffect(() => {
    localStorage.setItem('favCities', JSON.stringify([...favCities]));
  }, [favCities]);

  useEffect(() => {
    setHourlyWeatherForSelectedDayLength(hourlyWeatherForSelectedDay.length);
  }, [hourlyWeatherForSelectedDay]);

  return (
    <div
      className={cn({
        app: true,
        'app-dark': darkMode,
      })}
    >
      <Header />
      <main
        className={cn({
          main__card: true,
          'large-main_card': hourlyWeatherForSelectedDayLength > 0 && hourlyWeatherForSelectedDayLength < 6,
          'largePlus-main_card': hourlyWeatherForSelectedDayLength > 5,
        })}
      >
        <CitySearch />
        <CitiesInfo />
      </main>
    </div>
  );
};

export default App;
