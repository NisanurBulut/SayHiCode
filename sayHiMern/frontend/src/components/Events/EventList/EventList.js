import React from 'react';
import * as classes from './EventList.module.css';
import { List } from '@material-ui/core';
import EventItem from '../EventItem/EventItem';
const EventList = (props) => {
  const eventList = props.events.map((event) => {
      const eventTitlePrice= `${event.title} ${event.price.toString()} ₺`;
      console.log(event);
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        eventTitlePrice={eventTitlePrice}
        description={event.description}
        userId={props.authUserId}
        creatorId={event.creator._id}
      />
    );
  });
  return (
    <List className={classes.eventList} component="nav">
      {eventList}
    </List>
  );
};

export default EventList;
