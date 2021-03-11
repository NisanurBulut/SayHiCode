const bookPostResolvers = require('./bookPost');
const usersResolvers = require('./users');
module.exports = {
  Query: {
    ...bookPostResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...bookPostResolvers.Mutation
  }
};
