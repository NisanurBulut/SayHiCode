import React from 'react'
import { Card, Icon, Label, Image,Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
function PostCard({id, author, name, username, likeCount, commentcount,likes,createdAt}) {
  {
    console.log({id, author, name, username, likeCount, commentcount,likes,createdAt});
  }
    return (
        <Card fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
          <Card.Description as={Link} to={`/bookPosts/${id}`}>
            {name} {author}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />

      </Button>
      <Label as='a' basic color='red' pointing='left'>
        {likeCount}
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='comment' />

      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        {commentcount}
      </Label>
    </Button>
        </Card.Content>
      </Card>
    )
}

export default PostCard;
