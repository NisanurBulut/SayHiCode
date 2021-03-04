import React, { Component } from 'react'
import * as classes from './EventsPage.module.css';
import Button from '@material-ui/core/Button';

export class EventsPage extends Component {
    render() {
        return (
            <div className={classes.eventsControl}>
               <Button variant="contained" color="secondary" className="btn">Create event</Button>
            </div>
        )
    }
}

export default EventsPage;
