import React, { } from 'react';

const CitiesList = ({ list }) => {
  console.log(list);
  return (
    <div className="cities-list">
      <ul>
        {list.map((city) => (
          <li>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
