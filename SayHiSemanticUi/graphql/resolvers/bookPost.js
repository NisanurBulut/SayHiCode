const { AuthenticationError, UserInputError } = require('apollo-server');

const BookPost = require('../../models/BookPost');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getBookPosts() {
      try {
        const bookPosts = await BookPost.find().sort({ createdAt: -1 });
        return bookPosts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getBookPost(_, { postId }) {
      try {
        const BookPost = await BookPost.findById(postId);
        if (BookPost) {
          return BookPost;
        } else {
          throw new Error('Post Book not found !');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createBookPost(_, { author, name }, context) {
      try {
        const user = checkAuth(context);
        console.log(user);
        const newBookPost = new BookPost({
          author,
          name,
          user: user.id,
          username: user.username,
          createdAt: new Date().toISOString(),
        });

        const posted = await newBookPost.save();

        context.pubsub.publish('NEW_BOOKPOST', {
          newBookPost: posted
        });

        return posted;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteBookPost(_, { postId }, context) {
      const user = checkAuth(context);
      try {
        const post = await BookPost.findById(postId);
        if (user.username === post.username) {
          await post.delete();
          return 'Post Book deleted successfully !';
        } else {
          throw new AuthenticationError('Action not allowed');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async likeBookPost(_, { postId }, context) {
      const { username } = checkAuth(context);
      const bookPostItem = await BookPost.findById(postId);
      if (bookPostItem) {
        if (bookPostItem.likes.find((a) => a.username === username)) {
          bookPostItem.likes = bookPostItem.likes.filter(
            (a) => a.username !== username
          );
          await bookPostItem.save();
        } else {
          bookPostItem.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        await bookPostItem.save();
        return bookPostItem;
      } else {
        throw new UserInputError('Book post not found');
      }
    }
  },
  Subscription: {
    newBookPost: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator('NEW_BOOKPOST'),
    },
  },
};
