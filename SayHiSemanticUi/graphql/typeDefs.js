const gql = require('graphql-tag');

module.exports = gql`
  type BookPost {
    id: ID!
    author: String!
    name: String!
    username: String!
    createdAt: String!
    comments: [Comment]!
    user: User!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    imageUrl: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    imageUrl: String!
  }
  type Query {
    getBookPosts: [BookPost],
    getBookPost(postId: ID!): BookPost
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createBookPost(author: String!, name: String!): BookPost!
    deleteBookPost(postId: ID!): String!
    createComment(postId: String!, body:String):BookPost!
    deleteComment(postId: String!, commentId:ID!):BookPost!
    likeBookPost(postId: ID!):BookPost!
  }
  type Subscription {
    newBookPost: BookPost!
  }
`;
