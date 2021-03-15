import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Button, Label, Icon } from 'semantic-ui-react';
import { LIKE_BOOKPOST_MUTATION } from '../util/graphql';
import GeneralPopup from "../util/GeneralPopup";
const LikeButton = ({user, id, likes, likeCount}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

const [likePost] = useMutation(LIKE_BOOKPOST_MUTATION, {
    variables: { postId: id }
  });

  const likeButton = user ? (
    liked ? (
      <Button size="mini" color="red">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button size="mini" color="red" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" size="mini" color="red">
      <Icon name="heart" />
    </Button>
  );
  return (
    <Button size="mini" as="div" labelPosition="right" onClick={likePost}>
    <GeneralPopup content={liked ? 'Unlike' : 'Like'}>{likeButton}</GeneralPopup>
    <Label basic color="red" pointing="left">
      {likeCount}
    </Label>
  </Button>
  );
};

export default LikeButton;
