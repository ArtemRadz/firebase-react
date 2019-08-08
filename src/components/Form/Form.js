import React, { useState, useRef } from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './Form.css';

const Form = ({ restaurantRef }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const handleInput = event => setName(event.target.value);
  let timeoutID = useRef(null);

  const handleSubmit = () => {
    restaurantRef.current
      .push({ name })
      .then(() => {
        clearTimeout(timeoutID.current);
        setName('');
        setMessage(`Restaurant '${name}' added`);
      })
      .catch(error => {
        clearTimeout(timeoutID.current);
        setMessage(`Restaurant '${name}' not added. Message error: ${error}`);
      })
      .finally(() => {
        timeoutID.current = setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <form id="form-component">
      <p>Add new restaurant</p>
      <Input label="Restaurant name" value={name} handleChange={handleInput} />
      <Button title={'Submit'} disabled={!name} handleClick={handleSubmit} />
      <p>{message}</p>
    </form>
  );
};

Form.propTypes = {
  restaurantRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired
};

export default Form;
