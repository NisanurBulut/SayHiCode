const bookPostResolvers = require('./bookPost');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

module.exports = {
  BookPost: {
    likeCount: (parent) => {
      console.log(parent);
      return parent.likes.length;
    },
    commentCount: (parent) => {
      console.log(parent);
      return parent.comments.length;
    },
  },
  Query: {
    ...bookPostResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...bookPostResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...bookPostResolvers.Subscription,
  },
};
