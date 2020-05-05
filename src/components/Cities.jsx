import React, { useState } from 'react';

const Cities = ({ cities, b }) => {
  const handleClick = (event) => {

  }

  return (
    <div className="cities">
      <ul onClick={(event) => handleClick(event)}>
        {cities.map((city) => (
          <li key={city.id}>
            {city.name}
          </li>
        ))}
        
        {/* <li onClick={(event) => clickHandler(event)}>Показать еще 10</li> */}
      </ul>
    </div>
  );
}

export default Cities;
