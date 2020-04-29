/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import CitiesList from './CitiesList';

const CitySearchHeader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listCities, setListCities] = useState([]);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      
      try {
        const response = await fetch(`/api/getCities?query=${query}`);
        const body = await response.json();
        console.log(body);
        
        // if (query.length > 0) {
        //   const cities = resultToJSON
        //     .filter((city) => city.name
        //       .toLowerCase()
        //       .startsWith(`${query.toLowerCase()}`)
        //     );
              
        //   setListCities(cities);

        // }
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [query]);


  return (
    <>
      <div className="city-search-header">
        <h3 className="city-search-title">SEARCH CITIES</h3>
        <div className="search-city-input-wrapper">
          <input className="search-city-input" value={query} onChange={(event) => setQuery(event.target.value)} auto-complete-placeholder="search city" placeholder="search city" />
          <button className="search-city-btn">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451 451">
              <path
                fill="#FFF"
                d="M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="city-search-body">
        <CitiesList list={listCities} />
      </div>
    </>
  );
};

export default CitySearchHeader;
