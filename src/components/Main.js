import React, { useState } from 'react';

import { css } from '@emotion/core';

import Auth from './Auth';
import User from './User';
import Form from './Form';

const Main = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  return (
    <main
      css={css`
        background-color: #19212b;
        color: #4fc3f7;
        padding: 15px;
      `}
    >
      {loadingState && <p>Loading...</p>}
      {currentUser ? (
        <>
          <User user={currentUser} />
          <Form />
        </>
      ) : (
        <Auth
          loadingState={loadingState}
          onAuthStateChanged={setCurrentUser}
          handleLoadingState={setLoadingState}
        />
      )}
    </main>
  );
};

export default Main;
