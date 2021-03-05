import React from 'react';
import { List } from '@material-ui/core';
import EventItem from '../EventItem/EventItem';
const EventList = (props) => {
  const eventList = props.events.map((event) => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        date={new Date(event.date).toLocaleDateString()}
        description={event.description}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });
  return (
    <List className="List" component="nav">
      {eventList}
    </List>
  );
};

export default EventList;
