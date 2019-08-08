import React from 'react';

import PropTypes from 'prop-types';

import Restaurant from '../Restaurant/Restaurant';

import './Restaurants.css';

const Restaurants = ({ restaurants, user, restaurantRef }) => {
  const { uid, displayName } = user;

  const handleSelect = key => {
    restaurantRef.current
      .child(key)
      .child('votes')
      .child(uid)
      .set(displayName);
  };
  const handleDeselect = key => {
    restaurantRef.current
      .child(key)
      .child('votes')
      .child(uid)
      .remove();
  };

  return (
    <>
      <h2 className="restaurants-title">Restaurants</h2>
      <section id="restaurants">
        {Object.entries(restaurants).map(([key, restaurant]) => (
          <Restaurant
            key={key}
            userUID={uid}
            {...restaurant}
            handleSelect={() => handleSelect(key)}
            handleDeselect={() => handleDeselect(key)}
          />
        ))}
      </section>
    </>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired,
  restaurantRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired
};

export default Restaurants;
