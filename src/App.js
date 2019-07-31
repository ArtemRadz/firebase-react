import React, { useState, useEffect } from "react";

import { database } from "./firebase/firebase";

import "./css/App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    database.ref().on("value", snapshot => {
      setData(snapshot.val());
    });
  });

  return (
    <React.StrictMode>
      <div className="App">
        <header>
          <h1>React and Firebase App</h1>
        </header>
        <main>
          <h2>{data}</h2>
        </main>
      </div>
    </React.StrictMode>
  );
};

export default App;
