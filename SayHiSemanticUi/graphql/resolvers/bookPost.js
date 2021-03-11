const { AuthenticationError } = require('apollo-server');

const PostBook = require('../../models/PostBook');
const checkAuth = require('../../util/check-auth');

module.exports = {
  Query: {
    async getBookPosts() {
      try {
        const bookPosts = await PostBook.find().sort({ createdAt: -1 });
        return bookPosts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getBookPost(_, { postId }) {
      try {
        const postBook = await PostBook.findById(postId);
        if (postBook) {
          return postBook;
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
        const newBookPost = new PostBook({
          author,
          name,
          user: user.id,
          username: user.username,
          createdAt: new Date().toISOString(),
        });

        const postBook = await newBookPost.save();
        return postBook;
      } catch (err) {
        throw new Error(err);
      }
    },
    async deleteBookPost(_, { postId }, context) {
      const user = checkAuth(context);
      try {
        const post = await PostBook.findById(postId);
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
  },
};
