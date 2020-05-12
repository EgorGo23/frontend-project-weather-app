import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { store } from '../../store';

const SliderContent = ({ slides, removeItem }) => {
  const styles = {
    height: '8.5rem',
    display: 'flex',
    width: '9999px',
  };

  const { globalState, dispatch } = useContext(store);
  const { selectedFavCity, favCities } = globalState;

  const selectItem = (data) => {
    dispatch({ type: 'SELECT_FAV_CITY', payload: data });
  }

  
  return (
    <div
      className="slider__content"
      style={styles}
    >
      {slides.map((data) => (<Slide
        key={data.id}
        isActive={data.id === selectedFavCity.id ? true : false}
        selectItem={selectItem}
        removeItem={removeItem}
        data={data}
      />))}
    </div>
  );
};


export default SliderContent;
