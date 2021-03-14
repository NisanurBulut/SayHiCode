import React, {useContext} from 'react';
import { useQuery } from '@apollo/react-hooks';

import { AuthContext } from "../context/auth";
import { Grid, Transition } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import BookPostForm from '../components/BookPostForm';
import { FETCH_BOOKPOSTS_QUERY } from '../util/graphql';

const Home = (props) => {
  const {
    loading,
    data,
  } = useQuery(FETCH_BOOKPOSTS_QUERY);
  console.log(data);
  const bookPosts=data["getBookPosts"];
  const {user} = useContext(AuthContext)


  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        { user && (
          <Grid.Column>
            <BookPostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {bookPosts &&
              bookPosts.map((bpost) => (
                <Grid.Column key={bpost.id} style={{ marginBottom: 20 }}>
                  <PostCard bookPost={bpost} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
