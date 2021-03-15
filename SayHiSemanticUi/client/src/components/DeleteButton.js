import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import {
  FETCH_BOOKPOSTS_QUERY,
  DELETE_COMMENT_MUTATION,
  DELETE_BOOKPOST_MUTATION,
} from '../util/graphql';
import GeneralPopup from '../util/GeneralPopup';

function DeleteButton({ postId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = commentId
    ? DELETE_COMMENT_MUTATION
    : DELETE_BOOKPOST_MUTATION;
    console.log(postId, commentId);
    const [deletePostOrMutation] = useMutation(mutation, {
      update(proxy) {
        setConfirmOpen(false);
      },
      variables: {
        postId,
        commentId
      }
    });
  return (
    <>
      <GeneralPopup content={commentId ? 'Delete comment' : 'Delete book post'}>
        <Icon
          style={{ float: 'right' }}
          size="large"
          color="red"
          onClick={() => setConfirmOpen(true)}
          name="trash"
        />
      </GeneralPopup>
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePostOrMutation}
      />
    </>
  );
}

export default DeleteButton;
