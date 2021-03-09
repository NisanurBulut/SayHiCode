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
      },
}