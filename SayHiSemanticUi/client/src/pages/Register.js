import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
function Register() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate>
        <h1>Register</h1>
        <Form.Input
          label="UserName"
          placeholder="username..."
          name="username"
          value={values.username}
          onChange={onChange}
          type="text"
        />
        <Form.Input
          label="email"
          placeholder="email..."
          name="email"
          value={values.email}
          onChange={onChange}
          type="email"
        />
        <Form.Input
          label="Password"
          placeholder="password..."
          name="password"
          value={values.password}
          onChange={onChange}
          type="password"
        />
        <Form.Input
          label="ConfirmPassword"
          placeholder="confirmPassword..."
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
          type="password"
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
}

const REGISTER_USER = gql`
mutation register (
    $username:String!
    $email:String!
    $password:String!
    $confirmPassword:String!
) {
    register(
    registerInput:{
        username:$username,
        email:$email,
        password:$password,
        confirmPassword:$confirmPassword
    }
    ){
        id email username createdAt token
    }
}`;

export default Register;
