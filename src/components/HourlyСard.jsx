/* eslint-disable react/prop-types */
import React, { useEffect, useContext, useState } from 'react';
import { uniqueId } from 'lodash';
import { store } from '../store';

const HourlyСard = ({ hourlyData }) => {
  const getData = (list) => {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const getDayText = (element) => element.text.split(' ')[0];
    const getTimeText = (element) => element.text.split(' ')[1];

    return list.reduce((acc, item) => {
      const day = days[new Date(getDayText(item)).getDay()];

      return acc[day]
        ? {
          ...acc,
          [day]: [
            ...acc[day],
            { time: getTimeText(item), svg: item.svg, temp: item.temp },
          ],
        }
        : {
          ...acc,
          [day]: [
            { time: getTimeText(item), svg: item.svg, temp: item.temp },
          ],
        };
    }, {});
  };

  const { globalState, dispatch } = useContext(store);
  const { selectedWeatherDay } = globalState;
  const [fiveDayData, setFiveDayData] = useState([]);

  useEffect(() => {
    const hourlyWeather = getData(hourlyData);

    dispatch({ type: 'ADD_HOURLY_WEATHER', payload: hourlyWeather[selectedWeatherDay] || [] });
    setFiveDayData(hourlyWeather[selectedWeatherDay]);
  }, [hourlyData, selectedWeatherDay]);

  return (
    <>
      {
            fiveDayData && (
            <div className="forecast-hourly-card">
              {
                        fiveDayData.map(({ time, svg, temp }) => (
                          <div className="forecast-hourly-card__item" key={uniqueId()}>
                            <span className="hour__text">{`${time.split(':')[0]}:${time.split(':')[1]}`}</span>
                            {svg}
                            <div className="forecast-max-min">
                              <span>{`${temp}°`}</span>
                            </div>
                          </div>
                        ))
                    }
            </div>
            )
        }
    </>

  );
};

export default HourlyСard;
