import React from 'react';

import { auth, googleAuthProvider } from '../../firebase/firebase';

import Button from '../Button/Button';

import './Auth.css';

const Auth = ({ loadingState }) => {
  const handleSignIn = () => auth.signInWithPopup(googleAuthProvider);

  return (
    <div id="sign-in">
      {!loadingState && <Button title={'Sign In'} handleClick={handleSignIn} />}
    </div>
  );
};

export default Auth;
