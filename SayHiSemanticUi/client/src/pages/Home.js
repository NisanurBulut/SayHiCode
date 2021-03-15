import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import BookPostForm from '../components/BookPostForm';
import CustomLoader from '../components/Loader';
import { FETCH_BOOKPOSTS_QUERY } from '../util/graphql';

const Home = (props) => {
  const { localUser } = useContext(AuthContext);

  const { loading, error, data: { getBookPosts: posts } = {} } = useQuery(FETCH_BOOKPOSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1><i>Recent Book Posts</i></h1>
      </Grid.Row>
      <Grid.Row>
        {localUser && (
          <Grid.Column>
            <BookPostForm />
          </Grid.Column>
        )}
        {loading ? (
          <CustomLoader />
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard key={post.id} bookPost={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
