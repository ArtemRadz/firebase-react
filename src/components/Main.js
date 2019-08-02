import React from 'react';

import { css } from '@emotion/core';

import { database } from '../firebase/firebase';
import SignIn from './SignIn';

const Main = () => {
  return (
    <main
      css={css`
        background-color: #19212b;
        color: #4fc3f7;
        padding: 15px;
      `}
    >
      <SignIn />
    </main>
  );
};

export default Main;
