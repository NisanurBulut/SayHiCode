import React from 'react';
import { List } from '@material-ui/core';
import BookingItem from '../BookingItem/BookingItem';
const BookingList = (props) => {
  const bookingList = props.bookings.map((booking) => {
    return (
      <BookingItem createdAt={booking.createdAt} />
    );
  });
  return (
    <List className="List" component="nav">
      {bookingList}
    </List>
  );
};

export default BookingList;
