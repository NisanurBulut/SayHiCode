import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { Button, Form } from 'semantic-ui-react';
import { useForm } from '../util/hooks';
import { FETCH_BOOKPOSTS_QUERY } from '../util/graphql';

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
      proxy.writeQuery({ query: FETCH_BOOKPOSTS_QUERY, data });
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
        Submit
      </Button>
    </Form>
  );
}

const CREATE_BOOKPOST_MUTATION = gql`
  mutation createBookPost($name: String!, $author: String!) {
    createBookPost(name: $name, author: $author) {
        id
        name
        author
      createdAt
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default BookPostForm;
