import React from 'react';
import CancelScheduleSendOutlinedIcon from '@material-ui/icons/CancelScheduleSendOutlined';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from '@material-ui/core';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
const BookingItem = (props) => {
  {console.log(props)}
  return (
    <ListItem className="ListItem" button key={props.eventId}>
      <ListItemIcon>
        <BookmarksOutlinedIcon />
      </ListItemIcon>
      <ListItemText
        primary={props.title}
        secondary={new Date(props.createdAt).toLocaleDateString()}
      />
      <ListItemSecondaryAction onClick={props.onDelete.bind(this, props.bookingId)}>
          <CancelScheduleSendOutlinedIcon button color="secondary"/>
        </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookingItem;
