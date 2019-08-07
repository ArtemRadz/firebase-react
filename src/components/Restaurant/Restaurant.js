import React from 'react';

import PropTypes from 'prop-types';

const Restaurant = ({ name }) => (
  <article id="restaurant">
    <h2>{name}</h2>
  </article>
);

Restaurant.propTypes = {
  name: PropTypes.string.isRequired
};

export default Restaurant;
