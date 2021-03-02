const Booking = require('../../models/booking');
const { transformBooking, transformEvent } = require('./merge');
const Event = require('../../models/event');

module.exports = {
  bookings: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('UnAuthenticated!');
    }
    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },
  bookEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('UnAuthenticated!');
    }
    const fetchedEvent = await Event.findOne({
      _id: args.eventId,
    });
    const booking = Booking({
      user: '603b9c3e2031073b78512b10',
      event: fetchedEvent,
    });
    const result = await booking.save();
    return transformBooking(result);
  },
  cancelBooking: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('UnAuthenticated!');
    }
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  },
};
