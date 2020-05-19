import React, {
  useState, useContext, useEffect,
} from 'react';
import { store } from '../../store';
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import CircularLinkedList from '../../CircularLinkedList';

const Slider = () => {
  const { globalState, dispatch } = useContext(store);
  const { favCities } = globalState;

  // Список городов в компоненте хранится в виде cLL
  const favCitiesCllView = new CircularLinkedList();
  favCities.map((element) => favCitiesCllView.append(element));

  const initialState = {
    activeSlides: {
      first: 0,
      second: 1,
      third: 2,
    },
    slides: favCitiesCllView.size() > 3 ? [
      ...favCitiesCllView.toArray().slice(0, 3),
    ]
      : [...favCitiesCllView.toArray()],
    cities: favCitiesCllView,
  };

  const [state, setState] = useState(initialState);

  const { activeSlides, cities, slides } = state;

  useEffect(() => {
    /* В целях удобства разработки слайдера, приходящий из глобал стейта
            список любимых городов, преобразуется в cLL. Логика работы слайдера построена на
            основе cLL api. */
    const cLL = new CircularLinkedList();

    favCities.map((element) => cLL.append(element));

    const { first, second, third } = activeSlides;

    setState({
      ...state,
      slides: cLL.size() > 3 ? [
        cLL.getElementAt(first).element,
        cLL.getElementAt(second).element,
        cLL.getElementAt(third).element,
      ]
        : [...cLL.toArray()],
      cities: cLL,
    });
  }, [favCities]);

  const goPrevSlide = () => {
    const { first, second, third } = activeSlides;

    setState({
      ...state,
      activeSlides: {
        first: cities.indexOf(cities.getElementAt(first).prev.element),
        second: cities.indexOf(cities.getElementAt(second).prev.element),
        third: cities.indexOf(cities.getElementAt(third).prev.element),
      },
      slides: [
        cities.getElementAt(cities.indexOf(cities.getElementAt(first).prev.element)).element,
        cities.getElementAt(cities.indexOf(cities.getElementAt(second).prev.element)).element,
        cities.getElementAt(cities.indexOf(cities.getElementAt(third).prev.element)).element,
      ],
    });
  };

  const goNextSlide = () => {
    const { first, second, third } = activeSlides;

    setState({
      ...state,
      activeSlides: {
        first: cities.indexOf(cities.getElementAt(first).next.element),
        second: cities.indexOf(cities.getElementAt(second).next.element),
        third: cities.indexOf(cities.getElementAt(third).next.element),
      },
      slides: [
        cities.getElementAt(cities.indexOf(cities.getElementAt(first).next.element)).element,
        cities.getElementAt(cities.indexOf(cities.getElementAt(second).next.element)).element,
        cities.getElementAt(cities.indexOf(cities.getElementAt(third).next.element)).element,
      ],
    });
  };

  const selectItem = (data) => {
    dispatch({ type: 'SELECT_FAV_CITY', payload: data });
  };

  const removeItem = (event, data) => {
    event.stopPropagation();

    // Выделяем следующий элемент после удаляемого
    const removedElement = cities.getElementAt(cities.indexOf(data));
    dispatch({ type: 'SELECT_FAV_CITY', payload: removedElement.next.element });


    /* Проверка на присутствия head элемента в текущем списке слайдов.
            Если присутствует, то функция возвращает индекс слайда, иначе -1. */
    const positionHead = slides.findIndex((element) => element === cities.getHead().element);


    cities.delete(data);
    if (cities.isEmpty()) {
      dispatch({ type: 'REMOVE_FAV_CITY', payload: [] });
    } else {
      dispatch({ type: 'REMOVE_FAV_CITY', payload: cities.toArray() });
    }

    if (cities.size() > 3) {
      // Изменение слайдов после удаления
      if (positionHead === 1) {
        let newActiveSlides = {};

        if (data === slides[0]) {
          newActiveSlides = {
            first: 0,
            second: 1,
            third: 2,
          };
        } else if (data === slides[1]) {
          newActiveSlides = {
            first: cities.indexOf(cities.getTail().element),
            second: 0,
            third: 1,
          };
        } else if (data === slides[2]) {
          newActiveSlides = {
            first: cities.indexOf(cities.getTail().element),
            second: 0,
            third: 1,
          };
        }

        setState({
          ...state,
          activeSlides: newActiveSlides,
          slides: [
            cities.getElementAt(newActiveSlides.first).element,
            cities.getElementAt(newActiveSlides.second).element,
            cities.getElementAt(newActiveSlides.third).element,
          ],
        });
      } else if (positionHead === 2) {
        let newActiveSlides = {};

        if (data === slides[0]) {
          newActiveSlides = {
            first: cities.indexOf(cities.getTail().element),
            second: 0,
            third: 1,
          };
        } else if (data === slides[1]) {
          newActiveSlides = {
            first: cities.indexOf(cities.getTail().element),
            second: 0,
            third: 1,
          };
        } else if (data === slides[2]) {
          newActiveSlides = {
            first: cities.indexOf(cities.getTail().prev.element),
            second: cities.indexOf(cities.getTail().element),
            third: 0,
          };
        }

        setState({
          ...state,
          activeSlides: newActiveSlides,
          slides: [
            cities.getElementAt(newActiveSlides.first).element,
            cities.getElementAt(newActiveSlides.second).element,
            cities.getElementAt(newActiveSlides.third).element,
          ],
        });
      } else if (cities.size() === 0) {
        setState({
          ...state,
          slides: [],
        });
      } else {
        setState({
          ...state,
          slides: [
            cities.getElementAt(activeSlides.first).element,
            cities.getElementAt(activeSlides.second).element,
            cities.getElementAt(activeSlides.third).element,
          ],
        });
      }
    } else {
      setState({
        ...state,
        slides: [
          ...cities.toArray(),
        ],
      });
    }
  };

  return (
    <div className="slider">

      <div className="slider-wrapper">
        <SliderContent
          slides={slides}
          selectItem={selectItem}
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
