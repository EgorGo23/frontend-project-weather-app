/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  idSearchedCity: null,
  searchText: '',
  searchErrorFetch: false,
  citiesSearch: [],
  favCities: [
    { name: 'Moscow', id: 524894, coord: { lon: 37.61, lat: 55.76 } },
    { name: 'Berlin', id: 2950158, coord: { lon: 10.45, lat: 54.03 } },
    { name: 'New York', id: 5128638, coord: { lon: -75.5, lat: 43 } },
    { name: 'London', id: 2643743, coord: { lon: -0.13, lat: 51.51 } },
    { name: 'Hong Kong', id: 1819729, coord: { lon: 114.16, lat: 22.29 } },
    { name: 'Tokyo', id: 1850147, coord: { lon: 139.69, lat: 35.69 } },
    { name: 'Beijing', id: 1816670, coord: { lon: 116.4, lat: 39.91 } }
  ],
  selectedFavCity: { name: 'Moscow', id: 524894, coord: { lon: 37.61, lat: 55.76 } },
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case 'CHANGE_TEXT':
        return {
          ...state,
          searchText: payload,
        };
      case 'CHANGE_CITIES_SEARCH_LIST':
        return {
          ...state,
          citiesSearch: payload,
        };
      case 'ADD_ID_SEARCHED_CITY':
        return {
          ...state,
          idSearchedCity: payload,
        };
      case 'SET_SEARCH_ERROR':
        return {
          ...state,
          searchErrorFetch: payload,
        };
      case 'ADD_TO_FAV':
        const { favCities } = state;
        const checkInd = favCities.findIndex(({ name }) => name === payload.name);
        if (checkInd === -1) {
          return {
            ...state,
            favCities: [
              payload,
              ...favCities,
            ]
          }
        } else {
          const { favCities } = state;
          return {
            ...state,
            favCities: [
              favCities[checkInd],
              ...favCities.filter((city) => city.name !== payload.name),
            ],
          }
        }
      case 'SELECT_FAV_CITY':
        return {
          ...state,
          selectedFavCity: payload,
        };
      case 'REMOVE_FAV_CITY':   
        return {
          ...state,
          favCities: payload,
        };
      default:
        throw new Error();
    }
  }, initialState);
  
  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};


export { store, StateProvider };
