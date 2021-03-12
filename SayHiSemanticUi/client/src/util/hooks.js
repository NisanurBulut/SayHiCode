import React, { useState } from 'react';

export const useForm = (callback, initialstate = {}) => {
  const [values, setValues] = useState(initialstate);
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };
  return {
    onChange,
    onSubmit,
    values,
  };
};
