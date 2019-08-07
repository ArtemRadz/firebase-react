import React from 'react';

import PropTypes from 'prop-types';

import Restaurant from './Restaurant';

const Restaurants = ({ restaurants }) => (
  <>
    {Object.entries(restaurants).map(([key, restaurant]) => (
      <Restaurant key={key} {...restaurant} />
    ))}
  </>
);

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default Restaurants;
