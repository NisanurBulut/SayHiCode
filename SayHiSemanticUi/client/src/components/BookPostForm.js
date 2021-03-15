import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Button, Form } from 'semantic-ui-react';
import { useForm } from '../util/hooks';
import {
  FETCH_BOOKPOSTS_QUERY,
  CREATE_BOOKPOST_MUTATION,
} from '../util/graphql';

function BookPostForm() {
  const [errors, setErrors] = useState({});
  const { values, onChange, onSubmit } = useForm(createPostCallBack, {
    name: '',
    author: '',
  });

  const [createBookPost, { loading }] = useMutation(CREATE_BOOKPOST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_BOOKPOSTS_QUERY,
      });
      proxy.writeQuery({
        query: FETCH_BOOKPOSTS_QUERY,
        data: {
          getBookPosts: [result.data.createBookPost, ...data.getBookPosts],
        },
      });
      values.name = "";
      values.author = "";
    },
    onError(err) {
      return err;
    },
  });


  function createPostCallBack() {
    createBookPost();
  }
  return (
    <>
      <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
        <Form.Field>
          <Form.Input
            placeholder="author"
            name="author"
            onChange={onChange}
            value={values.author}
            error={errors.author ? true : false}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            placeholder="name"
            name="name"
            onChange={onChange}
            value={values.name}
            error={errors.name ? true : false}
          />
        </Form.Field>
        <Button type="submit" color="teal">
          Save
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
    </>
  );
}

export default BookPostForm;
