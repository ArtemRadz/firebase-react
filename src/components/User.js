import React from 'react';

import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { auth } from '../firebase/firebase';
import Button from './Button';

const User = ({ user }) => {
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
        src={user.photoURL}
        alt={`${user.displayName}`}
      ></img>
      <div
        css={css`
          padding: 15px;
        `}
      >
        <p>{user.displayName}</p>
        <p>{user.email}</p>
        <Button title={'Sign Out'} handleClick={() => auth.signOut()} />
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  }).isRequired
};

export default User;
