const { model, Schema } = require('mongoose');

const BookPostSchema = new Schema({
  author: String,
  name: String,
  username: String, // who posted it
  createdAt: String,
  comments: [
    {
      body: String,
      username: String, // who posted it
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

module.exports = model('BookPost', BookPostSchema);
