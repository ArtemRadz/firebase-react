import React from 'react';

import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { auth } from '../firebase/firebase';

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
        <button
          css={css`
            color: #fff;
            padding: 0 15px;
            height: 30px;
            border: 0;
            border-radius: 8px;
            background-color: #039be5;
            font-size: 14px;
            cursor: pointer;
          `}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
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
