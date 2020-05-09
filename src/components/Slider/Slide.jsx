import React from 'react';
import PropTypes from 'prop-types';
import cityIcon from 'Icons/city-svgrepo-com.svg';

const Slide = ({ name, id }) => (
  <li className="slide">
    <img className="slide__icon" alt="city" src={cityIcon} />
    <span>{name}</span>
  </li>
);

Slide.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Slide;
