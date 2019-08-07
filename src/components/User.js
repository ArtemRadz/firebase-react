import React from 'react';

import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { auth } from '../firebase/firebase';
import Button from './Button';

const User = ({ photoURL, displayName, email }) => {
  const handleSignOut = () => auth.signOut();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <img
        css={css`
          max-width: 150px;
          height: auto;
        `}
        src={photoURL}
        alt={`${displayName}`}
      ></img>
      <div
        css={css`
          padding: 15px;
        `}
      >
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
