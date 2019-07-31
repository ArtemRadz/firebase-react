import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Main />
      </div>
    </React.StrictMode>
  );
};

export default App;
