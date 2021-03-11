const BookPost = require('../../models/BookPost');
const checkAuth = require('../../util/check-auth');
const { UserInputError } = require('apollo-server');

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const {username} = checkAuth(context);
      if (body.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment body must not body',
          },
        });
      }
      const bookPostItem=BookPost.findById(postId);
      if(bookPostItem){
          bookPostItem.comments.unshift({
              body,
              username,
              createdat: new Date().toISOString()
          });
          await (await bookPostItem).save();
          return bookPostItem;
      }else{
          throw new UserInputError('Book post is not found');
      }
    },
  },
};
