import React, { useState, useEffect } from 'react';

import { css } from '@emotion/core';
import { auth, googleAuthProvider } from '../firebase/firebase';
import User from './User';

const Auth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setLoadingState(false);
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      {loadingState ? (
        <p>Loading...</p>
      ) : currentUser ? (
        <User user={currentUser} />
      ) : (
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
          onClick={() => auth.signInWithPopup(googleAuthProvider)}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Auth;
