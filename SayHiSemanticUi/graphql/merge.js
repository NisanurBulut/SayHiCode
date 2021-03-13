const DataLoader = require('dataloader');
const User = require('../models/User');

const dateToString = (date) => new Date(date).toISOString();

const userLoader = new DataLoader(userId => {
    return User.find({_id: userId });
  });


  const user = async userId => {
    try {
      const user = await userLoader.load(userId.toString());
      return {
        ...user._doc,
        _id: user.id
      };
    } catch (err) {
      throw err;
    }
  };

  const transformBooking = booking => {
    return {
      ...booking._doc,
      id: booking.id,
      user: user.bind(this, booking._doc.user),
      author: booking._doc.author,
      name: booking._doc.name,
      createdAt: dateToString(booking._doc.createdAt)
    };
  };

  exports.transformBooking = transformBooking;