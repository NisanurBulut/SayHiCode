import React from 'react';
import * as classes from './EventItem.module.css';
import { ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, Button } from '@material-ui/core';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
const EventItem = (props) => {
    {console.log(props);}
    return (
    <ListItem className={classes.eventListItem} button key={props.eventId}>
      <ListItemIcon>
        <EmojiEventsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary={props.eventTitlePrice} secondary={props.description} />
      <ListItemSecondaryAction>
         <Button className="btn" color="primary">

         </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default EventItem;
