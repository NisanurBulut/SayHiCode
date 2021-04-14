import React from 'react';
import { List } from '@material-ui/core';
import BookingItem from '../BookingItem/BookingItem';
const BookingList = (props) => {
  const bookingList = props.bookings.map((booking) => {
    return (
      <BookingItem
        key={booking._id}
        title={booking.event.title}
        bookingId={booking._id}
        createdAt={booking.createdAt}
        onDelete={props.onDelete}
      />
    );
  });
  return (
    <List className="List" component="nav">
      {bookingList}
    </List>
  );
};

export default BookingList;
