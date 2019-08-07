import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './Form.css';

const Form = ({ restaurantRef }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const handleInput = event => setName(event.target.value);

  const handleSubmit = () => {
    restaurantRef.current
      .push({ name })
      .then(() => {
        setName('');
        setMessage('Item added');
      })
      .catch(error => {
        setMessage(`Item not added. Message error: ${error}`);
      })
      .finally(() => {
        setTimeout(() => setMessage(''), 3000);
      });
  };

  return (
    <form id="form-component">
      <Input value={name} handleChange={handleInput} />
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
