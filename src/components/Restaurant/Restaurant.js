import React from 'react';

import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './Restaurant.css';

const Restaurant = ({ name, votes, userUID, handleSelect, handleDeselect }) => {
  const arrayOfVotes = votes && Object.keys(votes);

  let isUserVoted = null;
  let countVoted = null;

  if (arrayOfVotes) {
    isUserVoted = arrayOfVotes.includes(userUID);
    countVoted = arrayOfVotes.length;
  }

  return (
    <article id="restaurant">
      <h3>{name}</h3>
      {votes && (
        <ul>
          <p>List of voted({countVoted})</p>
          {Object.entries(votes).map(([key, userName]) => (
            <li key={key}>{userName}</li>
          ))}
        </ul>
      )}

      {isUserVoted ? (
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
