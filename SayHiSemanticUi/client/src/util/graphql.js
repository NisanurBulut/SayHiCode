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
    likeBookPost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export const FETCH_BOOKPOST_QUERY = gql`
  query($postId: ID!) {
    getBookPost(postId: $postId) {
      id
      name
      author
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

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;

export const DELETE_BOOKPOST_MUTATION = gql`
  mutation deleteBookPost($postId: ID!) {
    deleteBookPost(postId: $postId)
  }
`;

export const SUBMIT_COMMENT_MUTATION = gql`
  mutation($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        username
      }
      commentCount
    }
  }
`;