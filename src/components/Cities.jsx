import React, { } from 'react';

const Cities = ({ cities }) => (
  <div className="cities">
    <ul>
      {cities.map((city) => (
        <li key={city.id}>
          {city.name}
        </li>
      ))}
    </ul>
  </div>
);

export default Cities;
