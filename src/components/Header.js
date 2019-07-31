import React from "react";

import { css } from "@emotion/core";

const Header = () => (
  <header
    css={css`
      background-color: #039be5;
      padding: 15px;
      color: #fff;
      text-align: center;
    `}
  >
    <h1>React and Firebase App</h1>
  </header>
);

export default Header;
