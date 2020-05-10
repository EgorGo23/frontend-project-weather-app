import React from 'react';
import Slider from './Slider/Slider';
import Header from './Header';
import CitySearch from './CitySearch';
import DailyCard from './DailyСard';

const App = () => (
  <>
    <Header />
    <main className="main-container__bg">
      <div className="main-card">
        <CitySearch />
        <div className="right-panel-wrapper">
          <Slider />
          {/* <DailyCard /> */}
        </div>
      </div>
    </main>
  </>
);

export default App;
