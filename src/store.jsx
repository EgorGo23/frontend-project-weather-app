/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  idSelectedCity: null,
  searchText: '',
  searchErrorFetch: false,
  citiesSearch: [],
  favCities: [
    { name: 'Moscow', id: 524894 },
    { name: 'Berlin', id: 2950158 },
    { name: 'New York', id: 5128638 },
    { name: 'London', id: 2643743 },
    { name: 'Hong Kong', id: 1819729 },
    { name: 'Tokyo', id: 1850147 },
    { name: 'Beijing', id: 1816670 },
  ],
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
      case 'ADD_ID':
        return {
          ...state,
          idSelectedCity: payload,
        };
      case 'SET_SEARCH_ERROR':
        return {
          ...state,
          searchErrorFetch: payload,
        };
      case 'ADD_TO_FAV':
        return {
          ...state,
          favCities: [
            payload,
            ...state.favCities,
          ],
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};


export { store, StateProvider };
