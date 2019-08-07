import React from 'react';

import PropTypes from 'prop-types';

const Restaurant = ({ name }) => <p>{name}</p>;

Restaurant.propTypes = {
  name: PropTypes.string.isRequired
};

export default Restaurant;
