import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

function Home() {
  const {
    loading,
    data: { getBookPosts: bookPosts },
  } = useQuery(FETCH_BOOKPOSTS_QUERY);
  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Book Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          bookPosts &&
          bookPosts.map((bpost) => {
            return (
              <Grid.Column key={bpost.id} style={{ marginBottom: 20 }}>
                <PostCard bookPost={bpost} />
              </Grid.Column>
            );
          })
        )}
      </Grid.Row>
    </Grid>
  );
}
const FETCH_BOOKPOSTS_QUERY = gql`
  {
    getBookPosts {
      id
      author
      name
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default Home;
