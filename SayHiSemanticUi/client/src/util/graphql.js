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



export const CREATE_BOOKPOST_MUTATION = gql`
  mutation createBookPost($name: String!, $author: String!) {
    createBookPost(name: $name, author: $author) {
        id
        name
        author
      createdAt
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;


export const LIKE_BOOKPOST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;