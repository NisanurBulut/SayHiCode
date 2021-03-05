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
  return (
    <ListItem className={classes.eventListItem} button key={props.eventId}>
      <ListItemIcon>
        <EmojiEventsOutlinedIcon />
      </ListItemIcon>
      <ListItemText
        primary={props.title}
        secondary={props.eventPriceDate}
      />

      {
      props.userId === props.creatorId ? (
        <ListItemSecondaryAction>
          <VisibilityOutlinedIcon button color="secondary" onClick={props.onDetail.bind(this,props.eventId)}/>
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  );
};

export default EventItem;
