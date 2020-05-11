import React, {
  useState, useContext, useEffect,
} from 'react';
import { store } from '../../store';
import SliderContent from './SliderContent';
import Arrow from './Arrow';

const Slider = () => {
  const { globalState } = useContext(store);
  const { favCities, selectedFavCity } = globalState;
  
  const initialState = {
    activeSlides: {
      first: 0,
      second: 1,
      third: 2,
    },
    translate: 0,
    transition: 0.45,
    slides: [],
  }
  const [state, setState] = useState(initialState);

  const { activeSlides, translate, transition, slides } = state;
  
  useEffect(() => {
    if (favCities.length === 0) {
      setState({
        ...state,
        slides: []
      })
    }

    if (favCities.length < 3) {
      if (favCities.length === 2) {
        setState({
          ...state,
          slides: [
            favCities[0],
            favCities[1],
          ]
        })
      } else if (favCities.length === 1) {
        setState({
          ...state,
          slides: [
            favCities[0]
          ]
        })
      }
    } else {
      const { first, second, third } = activeSlides;
      let prev = null;
      let middle = [];
      let next = null;

      if (activeSlides.first === 0) {
        prev = favCities.slice(favCities.length - 1);
      } else {
        prev = favCities.slice(activeSlides.first - 1, activeSlides.first);
      }
  
      if (activeSlides.third === favCities.length - 1) {
        next = favCities.slice(0, 1);
      } else {
        next = favCities.slice(activeSlides.third + 1, activeSlides.third + 2);
      }
  
      middle.push(favCities[first], favCities[second], favCities[third]);
      
      setState({
        ...state,
        slides: prev.concat(middle).concat(next),
      })
    }
    
    console.log(activeSlides)
  }, [activeSlides, favCities]);

  const goPrevSlide = () => {
    if (activeSlides.first === 0) {
      setState({
        ...state,
        activeSlides: {
          first: favCities.length - 1,
          second: activeSlides.second - 1,
          third: activeSlides.third - 1,
        }
      });
    } else if (activeSlides.second === 0) {
      setState({
        ...state,
        activeSlides: {
          first: activeSlides.first - 1,
          second: favCities.length - 1,
          third: activeSlides.third - 1,
        }
      });
    } else if (activeSlides.third === 0) {
      setState({
        ...state,
        activeSlides: {
          first: activeSlides.first - 1,
          second: activeSlides.second - 1,
          third: favCities.length - 1,
        }
      });
    } else {
      setState({
        ...state,
        activeSlides: {
          first: activeSlides.first - 1,
          second: activeSlides.second - 1,
          third: activeSlides.third - 1,
        }
      });
    }
  }

  const goNextSlide = () => {
    if (activeSlides.third === favCities.length - 1) {
      setState({
        ...state,
        activeSlides: {
          first: activeSlides.first + 1,
          second: activeSlides.second + 1,
          third: 0,
        }
      });
    } else if (activeSlides.second === favCities.length - 1) {
      setState({
        ...state,
        activeSlides: {
          first: activeSlides.first + 1,
          second: 0,
          third: activeSlides.third + 1,
        }
      })
    } else if (activeSlides.first === favCities.length - 1) {
      setState({
        ...state,
        activeSlides: {
          first: 0,
          second: activeSlides.second + 1,
          third: activeSlides.third + 1,
        }
      })
    } else {
      setState({
        ...state,
        activeSlides: {
          first: activeSlides.first + 1,
          second: activeSlides.second + 1,
          third: activeSlides.third + 1,
        }
      })
    }
  }

  return (
    <div className="slider">
      <Arrow direction="prev" handleClick={goPrevSlide} />

      <div className="slider-wrapper">
        <SliderContent
          translate={translate}
          transition={transition}
          slides={slides}
        />
      </div>

      <Arrow direction="next" handleClick={goNextSlide} />
    </div>
  );
};


export default Slider;

// const autoPlayref = useRef();
// useEffect(() => {
//   autoPlayref.current = nextSlide;
// });

// useEffect(() => {
//   const play = () => {
//     autoPlayref.current();
//   };
//   const interval = setInterval(play, 2000);
//   return () => clearInterval(interval);
// }, []);
