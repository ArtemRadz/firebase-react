import React from 'react';

import PropTypes from 'prop-types';

import { auth } from '../../firebase/firebase';
import Button from '../Button/Button';

import './User.css';

const User = ({ photoURL, displayName, email }) => {
  const handleSignOut = () => auth.signOut();

  return (
    <div id="user">
      <img className="user-img" src={photoURL} alt={`${displayName}`}></img>
      <div className="user-container">
        <p>{displayName}</p>
        <p>{email}</p>
        <Button title={'Sign Out'} handleClick={handleSignOut} />
      </div>
    </div>
  );
};

User.propTypes = {
  displayName: PropTypes.string,
  email: PropTypes.string.isRequired,
  photoURL: PropTypes.string
};

export default User;
