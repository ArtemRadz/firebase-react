import React, { useState, useEffect } from "react";

import { css } from "@emotion/core";

import { database } from "../firebase/firebase";

import Form from "./Form";
import DBContainer from "./DBContainer";

const Main = () => {
  const [data, setData] = useState(null);
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    database.ref().on("value", snapshot => {
      setData(snapshot.val());
    });
  }, []);

  const handleFormSubmit = () => {
    database
      .ref()
      .child("formValue")
      .set(formValue);
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
