import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import moment from 'moment';

function PostCard({
  bookPost: {
    name,
    author,
    createdAt,
    id,
    user,
    likeCount,
    commentCount,
    likes,
  },
}) {
  const likePost = () => {};
  const commentOnPost = () => {};
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={user.imageUrl}
        />
        <Card.Header>{user.username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>
          {name}-{author}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="btn-group">
        <Button size="mini" as="div" labelPosition="right" onClick={likePost}>
          <Button size="mini" color="red">
            <Icon name="heart" />
          </Button>
          <Label size="mini" as="a" basic color="red" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button floated="right" size="mini" as="div" labelPosition="right" onClick={commentOnPost}>
          <Button size="mini" color="blue">
            <Icon name="comments" />
          </Button>
          <Label size="mini" as="a" basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
