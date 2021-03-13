import React, { useContext, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { AuthContext } from '../context/auth';
import { Button, Form } from 'semantic-ui-react';
import { useForm } from '../util/hooks';

const Register = (props) => {
  const [errors, setErrors] = useState({});
  const context = useContext(AuthContext);
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    imageUrl: '',
  });
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      console.log(userData);
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });
  function registerUser() {
    addUser();
  }
  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <h1>Register</h1>
        <Form.Input
          label="UserName"
          placeholder="username..."
          name="username"
          value={values.username}
          onChange={onChange}
          type="text"
          error={errors.username ? true : false}
        />
        <Form.Input
          label="email"
          placeholder="email..."
          name="email"
          value={values.email}
          onChange={onChange}
          type="email"
          error={errors.email ? true : false}
        />
        <Form.Input
          label="Password"
          placeholder="password..."
          name="password"
          value={values.password}
          onChange={onChange}
          type="password"
          error={errors.password ? true : false}
        />
        <Form.Input
          label="ConfirmPassword"
          placeholder="confirmPassword..."
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
          type="password"
          error={errors.confirmPassword ? true : false}
        />
        <Form.Input
          label="imageUrl"
          placeholder="imageUrl..."
          name="imageUrl"
          value={values.imageUrl}
          onChange={onChange}
          type="imageUrl"
          error={errors.confirmPassword ? true : false}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="ui list">
            {Object.values(errors).map((value) => {
              return <li key={value}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $imageUrl: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        imageUrl: $imageUrl
      }
    ) {
      id
      email
      username
      createdAt
      token
      imageUrl
    }
  }
`;

export default Register;
