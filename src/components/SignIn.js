import React, { useState, useEffect } from 'react';

import { auth, googleAuthProvider } from '../firebase/firebase';

const SignIn = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      {currentUser ? (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign In
        </button>
      )}
    </div>
  );
};

export default SignIn;
