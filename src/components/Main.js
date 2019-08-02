import React from 'react';

import { css } from '@emotion/core';

import Auth from './Auth';

const Main = () => {
  return (
    <main
      css={css`
        background-color: #19212b;
        color: #4fc3f7;
        padding: 15px;
      `}
    >
      <Auth />
    </main>
  );
};

export default Main;
