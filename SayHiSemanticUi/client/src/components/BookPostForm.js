import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { Button, Form } from 'semantic-ui-react';
import { useForm } from '../util/hooks';
import { FETCH_BOOKPOSTS_QUERY, CREATE_BOOKPOST_MUTATION } from '../util/graphql';

function BookPostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallBack, {
    name: '',
    author: '',
  });

  const [createBookPost, error] = useMutation(CREATE_BOOKPOST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_BOOKPOSTS_QUERY,
      });
      data.getBookPosts = [result.data.createBookPost, ...data.getBookPosts];
      values.name = '';
      values.author = '';
    },
  });
  function createPostCallBack() {
    createBookPost();
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <Form.Input
          placeholder="author"
          name="author"
          onChange={onChange}
          value={values.author}
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          placeholder="name"
          name="name"
          onChange={onChange}
          value={values.name}
        />
      </Form.Field>
      <Button type="submit" color="teal">
        Save
      </Button>
    </Form>
  );
}

export default BookPostForm;
