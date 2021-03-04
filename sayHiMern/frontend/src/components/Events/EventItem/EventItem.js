import React from 'react';
import * as classes from './EventItem.module.css';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
const EventItem = (props) => {
  return (
    <ListItem  className={classes.eventListItem} button key={props.eventId}>
    <ListItemIcon>
    <EmojiEventsOutlinedIcon />
  </ListItemIcon>
  <ListItemText primary={props.title} secondary={props.description} />
</ListItem>
  );
};

export default EventItem;
