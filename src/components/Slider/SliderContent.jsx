import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { store } from '../../store';

const SliderContent = ({ slides, selectItem, removeItem }) => {

  const { globalState } = useContext(store);
  const { selectedFavCity } = globalState;
  
  return (
    <div className="slider__content">
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
