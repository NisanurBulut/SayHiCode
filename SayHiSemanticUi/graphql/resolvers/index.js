const bookPostResolvers = require('./bookPost');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
  Query: {
    ...bookPostResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...bookPostResolvers.Mutation,
    ...commentsResolvers.Mutation
  },
  Subscription: {
    ...bookPostResolvers.Subscription
  }
};
