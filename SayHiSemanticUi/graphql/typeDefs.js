const {gql} = require('graphql-tag');

module.exports = gql`
  type PostBook {
    id:ID!
    author: String!
    name: String!
    username: String!
    createdAt: String!
  }
  type Query {
    getBookPosts:[PostBook]
  }
`;