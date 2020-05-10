import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Arrow = ({ direction, handleClick }) => (
  <div className={`slider__arrow  ${direction}`} onClick={handleClick}>
    {direction === 'next' ? (<RightArrow />) : (<LeftArrow />)}
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Arrow;
