import React, { } from 'react';

const CitiesList = ({ cities }) => (
  <div className="cities-list">
    <ul>
      {cities.map((city) => (
        <li key={city.id}>
          {city.name}
        </li>
      ))}
    </ul>
  </div>
);

export default CitiesList;
