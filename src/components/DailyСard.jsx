import React, { useEffect, useContext, useState } from 'react';
import getCurrentWeatherData from '../getCurrentWeatherData';
import { store } from '../store';
import getWeekDay from '../getWeekDay';


const DailyСard = () => {
    const getFormattedDate = () => (
        `${new Date().getHours() < 10 ?
            `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ?
                `0${new Date().getMinutes()}` : new Date().getMinutes()}`
    );

    const getDataToday = (item) => (
        {
            temp_max: item.tempMain.max,
            temp_min: item.tempMain.min,
            temp: item.tempMain.temp,
            pressure: item.pressure,
            humidity: item.humidity,
            wind: item.wind,
            description: item.weatherText,
            svg: item.svg,
            clouds: item.clouds
        }
    );

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [timer, setTimer] = useState(getFormattedDate());
    const [state, setState] = useState({
        current: null,
        list: [],
        day: {
            shortName: getWeekDay(new Date(), 'short'),
            longName: getWeekDay(new Date(), 'long'),
        },
    });

    const { globalState, dispatch } = useContext(store);
    const { selectedFavCity } = globalState;
    
    const { current, list, day } = state;

    useEffect(() => {
        const { coord } = selectedFavCity;

        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly&appid=af535cef1cfa81c6e432207e2e85c58b&units=metric`);
                const body = await response.json();
                console.log(body.daily);
                setState({
                    ...state,
                    current: getDataToday(getCurrentWeatherData(body.daily[0])),
                    list: [
                        ...body.daily.slice(0, 7).map((element) => getDataToday(getCurrentWeatherData(element)))
                    ]
                });
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [selectedFavCity]);
    
    // useEffect(() => {
    //     const timerID = setInterval(
    //         () => tick(), 
    //         1000
    //     );
    //     return () => clearInterval(timerID);
    // }, [timer])

    const tick = () => setTimer(getFormattedDate());
    
    const selectDay = (name) => {
        dispatch({ type: 'SELECT_WEATHER_DAY', payload: name });
    }

    const renderWeekForecast = (list) => {
        let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
        const weekForecast = [];
        
        for (let i = 0, today = new Date().getDay(); i < list.length; i++) {
            weekForecast.push((
                <div className="weather-forecast-day" key={today} onClick={() => selectDay(today)}>
                    {console.log(today)}
                    <span className="forecast-day">{days[today]}</span>
                    {list[i].svg}
                    <div className="forecast-max-min">
                        <span>{`${list[i].temp_max}°`}</span>
                        <span>{`${list[i].temp_min}°`}</span>
                    </div>
                </div>
            ))
            
            if (today === 6) {
                today = 0;
            } else {
                today++;
            }
        }

        return weekForecast;
    }
    
    


    return (
        <>
            {
                current && (
                    <div className="city-weather-forecast-wrapper">
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
                                        <div>Pressure: <span>{current.pressure}</span></div>
                                        <div>Humidity: <span>{`${current.humidity}%`}</span></div>
                                        <div>Wind: <span>{`${current.wind} м/c`}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="week-forecast__container">
                            {
                                [...renderWeekForecast(list)]
                            }


                        </div>
                    </div>
                )
            }
        </>
    )
}

export default DailyСard;
