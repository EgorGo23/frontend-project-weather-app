import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cityIcon from 'Icons/city-svgrepo-com.svg';

const Slide = ({ isActive, selectItem, data  }) => {
  return (
    <div 
      className={cn({
        'slide': true,
        'activeItem': isActive,
      })} 
      onClick={() => selectItem(data)}
    >
      <img className="slide__icon" alt="city" src={cityIcon} />
      <span>{data.name}</span>
    </div>
  )
}


// Slide.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default Slide;
