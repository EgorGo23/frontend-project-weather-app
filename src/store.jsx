/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import React, { createContext, useReducer } from 'react';

const dataFromLocalStorage = JSON.parse(localStorage.getItem('favCities')) || [];

const initialState = {
  darkMode: false,
  idSearchedCity: null,
  searchText: '',
  searchErrorFetch: false,
  citiesSearch: [],
  favCities: dataFromLocalStorage,
  selectedFavCity: dataFromLocalStorage[0] || {},
  selectedWeatherDay: '',
  hourlyWeatherForSelectedDay: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case 'ACTIVATE_DARK_MODE':
        return {
          ...state,
          darkMode: !state.darkMode,
        };
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
        const checkInd = state.favCities.findIndex(({ id }) => id === payload.id);
        if (checkInd === -1) {
          return {
            ...state,
            favCities: [
              payload,
              ...favCities,
            ],
            selectedFavCity: payload,
          };
        }
        return {
          ...state,
          favCities: [
            favCities[checkInd],
            ...favCities.filter((city) => city.id !== payload.id),
          ],
          selectedFavCity: payload,
        };

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
      case 'SELECT_WEATHER_DAY':
        return {
          ...state,
          selectedWeatherDay: payload,
        };
      case 'ADD_HOURLY_WEATHER':
        return {
          ...state,
          hourlyWeatherForSelectedDay: payload,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};


export { store, StateProvider };
