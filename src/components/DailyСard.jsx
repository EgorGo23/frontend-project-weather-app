import React, { useEffect, useContext, useState } from 'react';
import getWeatherData from '../getCurrentWeatherData';
import { store } from '../store';

const DailyСard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [weatherData, setWeatherData] = useState({
        name: '',
        list: [],
    });

    const { globalState, dispatch } = useContext(store);
    const { idFavCity } = globalState;

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=55.76&lon=37.61&exclude=current,minutely,hourly&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`);
                const body = await response.json();
                
                console.log(body.daily);
                setWeatherData({
                    name: body.city.name,
                    list: body.list,
                });
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [idFavCity]);
    coord:
lat: 55.76
lon: 37.61
    // console.log(weatherData);

    const getDataToday = (list) => {
        
    }

    return (
        <div className="city-weather-forecast-wrapper">
            <div className="selected-city-current-data__container">
                <div className="selected-city-wrapper">
                    <span className="city-name">Санкт-Петербург</span>
                    <span className="city-time">суббота 18:00</span>
                    <span className="weather-condition">Облачно</span>
                    <div className="city-weather-data">
                        <div className="city-temp">
                            {/* <img className="city-weather-icon" width="60" height="60" src="../../public/icons/animated/cloudy.svg" /> */}
                            <span className="temp-metric">5°</span>
                        </div>
                        <div className="city-wind-hum-pres">
                            <div>Давление: <span>753</span></div>
                            <div>Влажность: <span>85%</span></div>
                            <div>Ветер: <span>7 м/c</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="city-search-forecast__container">
                <div className="weather-forecast-day">
                    <span className="forecast-day">Sa</span>
                    <img className="city-weather-icon" width="50" height="50" src="../../public/icons/animated/day.svg" />
                    <div className="forecast-max-min">
                        <span>6°</span>
                        <span>4°</span>
                    </div>

                </div>
                <div className="weather-forecast-day">
                    <span className="forecast-day">Su</span>
                    <img className="city-weather-icon" width="50" height="50" src="../../public/icons/animated/cloudy-night-2.svg" />
                    <div className="forecast-max-min">
                        <span>6°</span>
                        <span>4°</span>
                    </div>
                </div>
                <div className="weather-forecast-day">
                    <span className="forecast-day">Mo</span>
                    <img className="city-weather-icon" width="50" height="50" src="../../public/icons/animated/rainy-6.svg" />
                    <div className="forecast-max-min">
                        <span>6°</span>
                        <span>4°</span>
                    </div>
                </div>
                <div className="weather-forecast-day">
                    <span className="forecast-day">Tu</span>
                    <img className="city-weather-icon" width="50" height="50" src="../../public/icons/animated/rainy-1.svg" />
                    <div className="forecast-max-min">
                        <span>6°</span>
                        <span>4°</span>
                    </div>
                </div>
                <div className="weather-forecast-day">
                    <span className="forecast-day">We</span>
                    <img className="city-weather-icon" width="50" height="50" src="../../public/icons/animated/night.svg" />
                    <div className="forecast-max-min">
                        <span>6°</span>
                        <span>4°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyСard;