import React, { useContext } from 'react';
import WeatherCard from './CityWeatherCard';
import ForecastDailyCard from './ForecastDailyСard';
import FavCitiesList from './FavCities';
import ForecastHourlyCard from './ForecastHourlyСard';
import CitiesList from './Cities';
import CitySearch from './CitySearch';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <main className="main-container__bg">
      <div className="main-card">
        {/* <CitySearch /> */}
        <div className="right-panel-wrapper">
          <FavCitiesList />
        </div>
      </div>
    </main>
  </>
);

export default App;
