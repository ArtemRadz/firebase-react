import React, { useState, useEffect, useRef } from "react";

import { css } from "@emotion/core";

import { database } from "../firebase/firebase";

import Form from "./Form";
import DBContainer from "./DBContainer";

const Main = () => {
  const [data, setData] = useState(null);
  const [formValue, setFormValue] = useState("");

  let dataRef = useRef(null);

  useEffect(() => {
    dataRef.current = database.ref("/formValue");

    dataRef.current.on("value", snapshot => {
      setData(snapshot.val());
    });
  }, []);

  const handleFormSubmit = () => {
    const value = formValue.trim();
    if (value) {
      dataRef.current.push(value);
      setFormValue("");
    }
  };

  return (
    <main
      css={css`
        background-color: #19212b;
        color: #4fc3f7;
        padding: 15px;
      `}
    >
      <DBContainer data={data} />
      <Form
        value={formValue}
        handleChange={setFormValue}
        handleSubmit={handleFormSubmit}
      />
    </main>
  );
};

export default Main;
