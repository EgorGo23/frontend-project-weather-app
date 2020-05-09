import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import { store } from '../../store';

const SliderContent = ({ translate, transition }) => {
  const styles = {
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    height: '8.5rem',
    display: 'flex',
    width: '9999px',
  };

  const { globalState, dispatch } = useContext(store);

  const { favCities } = globalState;

  const handleClick = (id) => { }

  return (
    <ul
      className="slider__content"
      style={styles}
    >
      {favCities.map(({ name, id }) => (
        <Slide key={id} name={name} />
      ))}
    </ul>
  );
};

SliderContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
};

export default SliderContent;
