// dependencies
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

// relative imports
const { MONGO_DB } = require('./config.js');
const PostBook = require('./models/PostBook');

const typeDefs = gql`
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

const resolvers = {
  Query: {
    async getBookPosts() {
      try {
        const bookPosts = await PostBook.find();
        return bookPosts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(
    `mongodb://127.0.0.1:27017/${MONGO_DB}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    server.listen({ port: 8000 }).then((res) => {
      console.log(`Server running at ${res.url}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
