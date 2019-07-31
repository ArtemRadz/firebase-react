import React from "react";

const Form = ({ value, handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="db-object">Change DB object: </label>
      <input
        id="db-object"
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
