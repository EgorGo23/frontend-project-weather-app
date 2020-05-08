/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  idSelectedCity: null,
  searchText: '',
  searchErrorFetch: false,
  citiesSearch: [],
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE_TEXT':
        return {
          ...state,
          searchText: action.payload,
        };
      case 'CHANGE_CITIES_SEARCH_LIST':
        return {
          ...state,
          citiesSearch: action.payload ,
        };
      case 'ADD_ID':
        return {
          ...state,
          idSelectedCity: action.payload,
        };
      case 'SET_SEARCH_ERROR':
        return {
          ...state,
          searchErrorFetch: action.payload,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ globalState, dispatch }}>{children}</Provider>;
};


export { store, StateProvider };
