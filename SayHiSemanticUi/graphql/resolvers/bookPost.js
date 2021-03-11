const PostBook = require('../../models/PostBook');

module.exports = {
  Query: {
    async getBookPosts() {
      try {
        const bookPosts = await PostBook.find();
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
};
