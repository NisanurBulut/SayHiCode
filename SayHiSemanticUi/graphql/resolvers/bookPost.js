const PostBook = require('../../models/PostBook');
const User = require('../../models/User');
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
  },
};
