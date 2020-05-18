import React, { useContext, useState, useEffect } from 'react';
import Header from './Header';
import CitySearch from './CitySearch';
import CitiesInfo from './CitiesInfo';
import { store } from '../store';
import cn from 'classnames';

const App = () => {
  const { globalState } = useContext(store);
  const { darkMode, hourlyPointForSelectedDay } = globalState;
  
  const [numberPoint, setNumberPoint] = useState(0);
  console.log('Egor');
  useEffect(() => {
    if (hourlyPointForSelectedDay) {
      setNumberPoint(hourlyPointForSelectedDay.length > 5 ? true : false);
    }
  }, [hourlyPointForSelectedDay]);

  return (
    <div 
      className={cn({
        "app": true, 
        "app-dark": darkMode,
        "big-app": numberPoint,
      })}
    >
      <Header />
        <main 
          className={cn({
            "main__card": true, 
            "big-main-card": numberPoint,
          })}
        >
          <CitySearch />
          <CitiesInfo />
        </main>
    </div>
  )
};

export default App;

