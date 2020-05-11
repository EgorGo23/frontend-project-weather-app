import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { store } from '../../store';

const SliderContent = ({ translate, transition, slides }) => {
  const styles = {
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    height: '8.5rem',
    display: 'flex',
    width: '9999px',
  };

  const { globalState, dispatch } = useContext(store);
  const { selectedFavCity, favCities } = globalState;
  
  const selectItem = (data) => {
    dispatch({ type: 'SELECT_FAV_CITY', payload: data });
  }

  const removeItem = (event, id) => {
    event.stopPropagation();

    dispatch({ type: 'REMOVE_FAV_CITY', payload: id });
    
    //const indexRemovedItem = favCities.findIndex((city) => city.id === id);
    
    // if (favCities[indexRemovedItem + 1]) {
    //   console.log('1');
    //   dispatch({ type: 'SELECT_FAV_CITY', payload: favCities[indexRemovedItem + 1] });
    // } else if (favCities.length === 1) {
    //   console.log('2');
    //   dispatch({ type: 'SELECT_FAV_CITY', payload: null });
    // } else {
    //   dispatch({ type: 'SELECT_FAV_CITY', payload: favCities[0] });
    // }
  }
  
  const renderSlides = (slides) => {
    switch(slides.length) {
      case 2: 
        return slides.map((data) => (<Slide 
          key={data.id} 
          isActive={data.id === selectedFavCity.id ? true : false} 
          selectItem={selectItem}
          removeItem={removeItem}
          data={data}
        />));
      case 1:
        return <Slide 
          key={slides[0].id} 
          isActive={slides[0].id === selectedFavCity.id ? true : false} 
          selectItem={selectItem}
          removeItem={removeItem}
          data={slides[0]}
        />
      default: 
        return slides.slice(1, 4).map((data) => (<Slide 
          key={data.id} 
          isActive={data.id === selectedFavCity.id ? true : false} 
          selectItem={selectItem}
          removeItem={removeItem}
          data={data}
        />))
    }
  }


  return (
    <div
      className="slider__content"
      style={styles}
    > 
      {renderSlides(slides)}
    </div>
  );
};

SliderContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
};


export default SliderContent;
