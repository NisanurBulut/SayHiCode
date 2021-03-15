import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Button, Confirm, Icon } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { FETCH_BOOKPOSTS_QUERY,FETCH_BOOKPOST_QUERY,
  DELETE_BOOKPOST_MUTATION,DELETE_COMMENT_MUTATION
} from '../util/graphql';
import GeneralPopup from '../util/GeneralPopup';


function DeleteButton({ postId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_BOOKPOST_MUTATION;
  const [deletePostOrMutation] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (callback) callback();
    },
    variables: {
      postId,
      commentId
    }
  });
  return (
    <>
      <GeneralPopup size="ui small" content={commentId ? 'Delete comment' : 'Delete book post'}>
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
