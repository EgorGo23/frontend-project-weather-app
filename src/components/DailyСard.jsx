import React from 'react';

const DailyСard = () => {

    return (
        <div className="city-weather-forecast-wrapper">
            <div className="selected-city-current-data__container">
                <div className="selected-city-wrapper">
                    <span className="city-name">Санкт-Петербург</span>
                    <span className="city-time">суббота 18:00</span>
                    <span className="weather-condition">Облачно</span>
                    <div className="city-weather-data">
                        <div className="city-temp">
                            <img className="city-weather-icon" width="60" height="60" src="../../public/icons/animated/cloudy.svg" />
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