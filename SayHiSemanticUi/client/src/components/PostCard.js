import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/auth';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import LikeButton from '../components/LikeButton';

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
  const context = useContext(AuthContext);
  const localUser = context.user;
  const header =  (localUser && localUser.username === user.username)=== true ? (
    <Icon
      style={{float:"right"}}
      size="large"
      color="red"
      name="trash"
      onClick={() => alert('siliniyor')}
    />
  ):<Icon
  style={{float:"right"}}
  size="large"
  color="red"
  name=""
  onClick={() => alert('siliniyor')}
/>;

  return (
    <Card fluid>
      <Card.Content header={header}></Card.Content>
      <Card.Content>
        <Image floated="right" size="mini" src={user.imageUrl} />
        <Card.Header>{user.username}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>
          {name}-{author}
        </Card.Description>
      </Card.Content>
      <Card.Content extra className="btn-group">
        <LikeButton user={localUser} id={id} likes={likes} likeCount={likeCount} />
        <Button
          floated="right"
          size="mini"
          as="div"
          labelPosition="right"
          as={Link}
          to={`/bookposts/${id}`}
        >
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
