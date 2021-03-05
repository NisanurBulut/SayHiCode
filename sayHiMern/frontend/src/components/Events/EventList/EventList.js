import React from 'react';
import * as classes from './EventList.module.css';
import { List } from '@material-ui/core';
import EventItem from '../EventItem/EventItem';
const EventList = (props) => {
  const eventList = props.events.map((event) => {
      const eventPriceDate= `${new Date(event.date).toLocaleDateString()} ${event.price.toString()} ₺`;
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        eventPriceDate={eventPriceDate}
        description={event.description}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
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
