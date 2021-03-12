const BookPost = require('../../models/BookPost');
const checkAuth = require('../../util/check-auth');
const { UserInputError, AuthenticationError } = require('apollo-server');

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment body must not body',
          },
        });
      }
      const bookPostItem = await BookPost.findById(postId);
      if (bookPostItem) {
        bookPostItem.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await bookPostItem.save();
        return bookPostItem;
      } else {
        throw new UserInputError('Book post is not found');
      }
    },
    async deleteComment(_, { postId, commentId }, context) {
      const { username } = checkAuth(context);
      const bookPostItem = await BookPost.findById(postId);

      if (bookPostItem) {
        const commentIndex = bookPostItem.comments.findIndex(
          (a) => a.id === commentId
        );
        if (bookPostItem.comments[commentIndex].username === username) {
          bookPostItem.comments.splice(commentIndex, 1);
          await bookPostItem.save();
          return bookPostItem;
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      }else{
        throw new AuthenticationError('Book post is not found');
      }
    }
  },
};
