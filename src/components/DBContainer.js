import React from "react";

const DBContainer = ({ data }) => (
  <>
    <h2>DB object:</h2>
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  </>
);

export default DBContainer;
