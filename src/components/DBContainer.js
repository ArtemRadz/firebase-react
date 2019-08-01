import React from "react";

const DBContainer = ({ data }) => (
  <>
    <h2>DB object:</h2>
    {data ? (
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    ) : (
      <p>Loading data...</p>
    )}
  </>
);

export default DBContainer;
