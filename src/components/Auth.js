import React, { useEffect } from 'react';

import { auth, googleAuthProvider } from '../firebase/firebase';
import Button from './Button';

const Auth = ({ loadingState, onAuthStateChanged, handleLoadingState }) => {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      handleLoadingState(false);
      onAuthStateChanged(user);
    });
  }, []);

  return (
    <>
      {!loadingState && (
        <Button
          title={'Sign In'}
          handleClick={() => auth.signInWithPopup(googleAuthProvider)}
        />
      )}
    </>
  );
};

export default Auth;
