import gql from 'graphql-tag';
export const FETCH_BOOKPOSTS_QUERY = gql`
  {
    getBookPosts {
      id
      author
      name
      createdAt
      user {
        username
        imageUrl
      }
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