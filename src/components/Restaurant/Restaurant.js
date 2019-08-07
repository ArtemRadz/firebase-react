import React from 'react';

import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Restaurant = ({ name, votes, userUID, handleSelect, handleDeselect }) => {
  const userVoted = votes && Object.keys(votes).includes(userUID);

  return (
    <article id="restaurant">
      <h3>{name}</h3>
      <ul>
        {votes &&
          Object.entries(votes).map(([key, userName]) => (
            <li key={key}>{userName}</li>
          ))}
      </ul>
      {userVoted ? (
        <Button title="Cancel vote" handleClick={handleDeselect} />
      ) : (
        <Button title="Vote" handleClick={handleSelect} />
      )}
    </article>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  votes: PropTypes.object,
  userUID: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleDeselect: PropTypes.func.isRequired
};

export default Restaurant;
