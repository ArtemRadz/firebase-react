import React from 'react';

import Restaurant from './Restaurant';

const Restaurants = ({ restaurants }) => (
  <>
    {Object.entries(restaurants).map(([key, restaurant]) => (
      <Restaurant key={key} {...restaurant} />
    ))}
  </>
);

export default Restaurants;
