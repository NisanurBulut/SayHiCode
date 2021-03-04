import React from 'react';
import * as classes from './EventItem.module.css';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Button,
} from '@material-ui/core';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
const EventItem = (props) => {
  {
    console.log(props);
  }
  return (
    <ListItem className={classes.eventListItem} button key={props.eventId}>
      <ListItemIcon>
        <EmojiEventsOutlinedIcon />
      </ListItemIcon>
      <ListItemText
        primary={props.eventTitlePrice}
        secondary={props.description}
      />
      {props.userId === props.creatorId ? (
        <ListItemSecondaryAction>
          <VisibilityOutlinedIcon button color="secondary" />
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  );
};

export default EventItem;
