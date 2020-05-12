import React, {
    useState, useContext, useEffect,
} from 'react';
import { store } from '../../store';
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import circularLinkedList from './circularLinkedList';
import { elem } from 'prop-types';

const Slider = () => {
    const { globalState, dispatch } = useContext(store);
    const { favCities } = globalState;

    const favCLL = new circularLinkedList();
    favCities.map((element) => favCLL.append(element));

    const initialState = {
        activeSlides: {
            first: 0,
            second: 1,
            third: 2,
        },
        slides: [],
        cities: favCLL,
    }

    const [state, setState] = useState(initialState);

    const { activeSlides, cities, slides } = state;

    useEffect(() => {
        const cLL = new circularLinkedList();

        favCities.map((element) => cLL.append(element));

        setState({
            ...state,
            cities: cLL,
        })
    }, [favCities]);

    useEffect(() => {
        if (favCities.length > 2) {
            const { first, second, third } = activeSlides;
            
            const firstSlide = cities.getElementAt(first).element;
            const secondSlide = cities.getElementAt(second).element;
            const thirdSlide = cities.getElementAt(third).element;
            console.log(activeSlides);


            let newSlides = [];
            newSlides.push(firstSlide, secondSlide, thirdSlide);


            setState({
                ...state,
                slides: newSlides,
            })
        } else {
            setState({
                ...state,
                slides: favCities,
            })
        }
    }, [cities, activeSlides])
    
    const removeItem = (event, data) => {
        event.stopPropagation();
    
        dispatch({ type: 'REMOVE_FAV_CITY', payload: data });
        
        if (cities.indexOf(data) === cities.size() - 1) {
            setState({
                ...state,
                activeSlides: {
                    first: activeSlides.first - 1,
                    second: activeSlides.second,
                    third: activeSlides.third,
                }
            })
        }

        //const indexRemovedItem = favCities.findIndex((city) => city.id === data.id);
    
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

    const goPrevSlide = () => {
        const { first, second, third } = activeSlides;

        setState({
            ...state,
            activeSlides: {
                first: cities.indexOf(cities.getElementAt(first).prev.element),
                second: cities.indexOf(cities.getElementAt(second).prev.element),
                third: cities.indexOf(cities.getElementAt(third).prev.element),
            },
        })
    }

    const goNextSlide = () => {
        const { first, second, third } = activeSlides;

        setState({
            ...state,
            activeSlides: {
                first: cities.indexOf(cities.getElementAt(first).next.element),
                second: cities.indexOf(cities.getElementAt(second).next.element),
                third: cities.indexOf(cities.getElementAt(third).next.element),
            },
        })
    }

    return (
        <div className="slider">

            <div className="slider-wrapper">
                <SliderContent
                    slides={slides}
                    removeItem={removeItem}
                />
            </div>
            {
                favCities.length > 3 && (
                    <>
                        <Arrow direction="prev" handleClick={goPrevSlide} />
                        <Arrow direction="next" handleClick={goNextSlide} />
                    </>
                )
            }
        </div>
    );
};


export default Slider;