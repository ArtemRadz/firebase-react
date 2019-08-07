import React from 'react';

import { auth, googleAuthProvider } from '../firebase/firebase';

import Button from './Button';

const Auth = ({ loadingState }) => {
  const handleSignIn = () => auth.signInWithPopup(googleAuthProvider);

  return (
    <>
      {!loadingState && <Button title={'Sign In'} handleClick={handleSignIn} />}
    </>
  );
};

export default Auth;
