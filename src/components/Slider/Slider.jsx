import React, { useState, useContext } from 'react';
import { store } from '../../store';
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Slide from './Slide';

const Slider = () => {
  const { globalState, dispatch } = useContext(store);

  const { favCities } = globalState;

  const [state, setState] = useState({
    activeIndexes: {
      firstInd: 0,
      lastInd: 2,
    },
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndexes } = state;

  const nextSlide = () => {
    if (activeIndexes.lastInd === favCities.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndexes: {
          firstInd: favCities.length - 2,
          lastInd: 0,
        },
      });
    }

    setState({
      ...state,
      activeIndexes: {
        firstInd: activeIndexes.firstInd + 1,
        lastInd: activeIndexes.lastInd + 1,
      },
      translate: (activeIndexes.firstInd + 1) * 144,
    });
  };

  const prevSlide = () => {
    if (activeIndexes.firstInd === 0) {
      return setState({
        ...state,
        translate: (favCities.length - 1) * 144,
        activeIndexes: {
          firstInd: favCities.length - 1,
          lastInd: activeIndexes.lastInd - 1,
        },
      });
    }

    setState({
      ...state,
      activeIndexes: {
        firstInd: activeIndexes.firstInd - 1,
        lastInd: activeIndexes.lastInd - 1,
      },
      translate: (activeIndexes - 1) * 144,
    });
  }
  console.log(state);
  return (
    <div className="slider">
      <Arrow direction="prev" handleClick={prevSlide} />

      <div className="wrapper">
        <SliderContent
          translate={translate}
          transition={transition}
        />
      </div>

      <Arrow direction="next" handleClick={nextSlide} />
    </div>
  );
};


export default Slider;
