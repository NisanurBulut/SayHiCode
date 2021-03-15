import React, { useContext, useState, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import moment from 'moment';
import { FETCH_BOOKPOST_QUERY, SUBMIT_COMMENT_MUTATION } from '../util/graphql';
import {
  Button,
  Card,
  Form,
  Grid,
  Image,
  Icon,Label
} from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import LikeButton from '../components/LikeButton';
import DeleteButton from '../components/DeleteButton';
import GeneralPopup from '../util/GeneralPopup';
import CustomLoader from '../components/Loader';

function BookPost(props) {
  const postId = props.match.params.postId;
  const {localUser} = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState('');
  const { data: { getBookPost: post } = {} } = useQuery(FETCH_BOOKPOST_QUERY, {
    variables: {
      postId,
    },
  });

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment('');
      commentInputRef.current.blur();
    },
    variables: {
      postId,
      body: comment,
    },
  });

  function deletePostCallback() {
    props.history.push('/');
  }

  let postMarkup;
  if (!post) {
    postMarkup = <CustomLoader />
  } else {
    const {
      id,
      name,
      author,
      createdAt,
      user,
      comments,
      likes,
      likeCount,
      commentCount,
    } = post;
    const header =((localUser && localUser.username === user.username)=== true ?
    <DeleteButton postId={id} /> : '');
    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image
              src={user.imageUrl}
              size="large"
              float="right"
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Content>
              <Card.Content header={header}></Card.Content>
                <Card.Header>{user.username}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{name}-{author}</Card.Description>
              </Card.Content>
              <hr />
              <Card.Content extra>
                <LikeButton user={localUser} id={id} likes={likes} likeCount={likeCount} />
                <GeneralPopup content="Comment on post">
                  <Button
                  floated="right"
                    as="div"
                    labelPosition="right"
                    size="mini"
                    onClick={() => console.log('Comment on post')}
                  >
                    <Button size="mini" basic color="blue">
                      <Icon name="comments" />
                    </Button>
                    <Label size="mini" basic color="blue" pointing="left">
                      {commentCount}
                    </Label>
                  </Button>
                </GeneralPopup>
              </Card.Content>
            </Card>
            {localUser && (
              <Card fluid>
                <Card.Content>
                  <p>Post a comment</p>
                  <Form>
                    <div className="ui action input fluid">
                      <input
                        type="text"
                        placeholder="Comment.."
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        ref={commentInputRef}
                      />
                      <button
                        type="submit"
                        className="ui button teal"
                        disabled={comment.trim() === ''}
                        onClick={submitComment}
                      >
                        Save
                      </button>
                    </div>
                  </Form>
                </Card.Content>
              </Card>
            )}
            {comments.map((comment) => (
              <Card fluid key={comment.id}>
                <Card.Content>
                  {localUser && localUser.username === comment.username && (
                    <DeleteButton postId={id} commentId={comment.id} />
                  )}
                  <Card.Header>{comment.username}</Card.Header>
                  <Card.Meta>{moment(comment.createdAt).fromNow()}</Card.Meta>
                  <Card.Description>{comment.body}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return postMarkup;
}

export default BookPost;
