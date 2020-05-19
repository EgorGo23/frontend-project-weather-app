import React, { useContext, useState, useEffect } from 'react';
import cn from 'classnames';
import Header from './Header';
import CitySearch from './CitySearch';
import CitiesInfo from './CitiesInfo';
import { store } from '../store';

const App = () => {
  const { globalState } = useContext(store);
  const { darkMode, favCities, selectedWeatherDay } = globalState;

  const [favCitiesLength, setFavCititesLength] = useState(favCities.length);
  const [isSelectedWeatherDay, setSelectedWeatherDay] = useState(selectedWeatherDay);

  useEffect(() => {
    localStorage.setItem('favCities', JSON.stringify([...favCities]));
    setFavCititesLength(favCities.length);
  }, [favCities]);

  useEffect(() => {
    setSelectedWeatherDay(setSelectedWeatherDay);
  }, [selectedWeatherDay]);

  return (
    <div
      className={cn({
        app: true,
        'medium-app': favCitiesLength,
        'large-app': favCitiesLength && isSelectedWeatherDay,
        'large_plus-app': '',
        'app-dark': darkMode,
      })}
    >
      <Header />
      <main
        className={cn({
          main__card: true,
          'medium-main_card': favCitiesLength,
          // 'large-main_card': '',
        })}
      >
        <CitySearch />
        {
          favCitiesLength !== 0 ? <CitiesInfo /> : null
        }
      </main>
    </div>
  );
};

export default App;
