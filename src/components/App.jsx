import React, { useContext } from 'react';
import Header from './Header';
import CitySearch from './CitySearch';
import CitiesInfo from './CitiesInfo';
import { store } from '../store';
import cn from 'classnames';

const App = () => {
  const { globalState, dispatch } = useContext(store);
  const { darkMode } = globalState;

  return (
    <div 
      className={cn({
        "app": true, 
        "app-dark": darkMode,
      })}
    >
      <Header />
      <main className="main-container__bg">
        <div className="main-card">
          <CitySearch />
          <CitiesInfo />
        </div>
      </main>
    </div>
  )
};

export default App;
