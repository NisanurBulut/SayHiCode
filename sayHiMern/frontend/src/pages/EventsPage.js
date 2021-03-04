import React, { Component } from 'react';
import * as classes from './EventsPage.module.css';
import Button from '@material-ui/core/Button';
import Modal from '../components/Modal/Modal';
export class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
          <Modal title="Add event" canCancel canConfirm>
              Modal content
          </Modal>
        <div className={classes.eventsControl}>
          <Button variant="contained" color="secondary" className="btn">
            Create event
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
