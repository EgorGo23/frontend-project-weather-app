import React, { useContext } from 'react';
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
  const { selectedFavCity } = globalState;

  const selectItem = (data) => {
    dispatch({ type: 'SELECT_FAV_CITY', payload: data });
  }

  return (
    <div
      className="slider__content"
      style={styles}
    >
      {slides.slice(1,4).map((data) => (
        <Slide 
          key={data.id} 
          isActive={data.id === selectedFavCity.id ? true : false} 
          selectItem={selectItem} 
          data={data}
        />
      ))}
    </div>
  );
};

SliderContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
};

export default SliderContent;
