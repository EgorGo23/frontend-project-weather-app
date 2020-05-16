import React from 'react';
import Slider from './Slider/Slider';
import WeatherForecast from './WeatherForecast';

const CitiesInfo = () => (
    <div className="cities-info">
        <Slider />
        <WeatherForecast />
    </div>
);

export default CitiesInfo;