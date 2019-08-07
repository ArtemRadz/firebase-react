import React from 'react';

import PropTypes from 'prop-types';

import Restaurant from '../Restaurant/Restaurant';

import './Restaurants.css';

const Restaurants = ({ restaurants }) => (
  <section id="restaurants">
    {Object.entries(restaurants).map(([key, restaurant]) => (
      <Restaurant key={key} {...restaurant} />
    ))}
  </section>
);

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default Restaurants;
