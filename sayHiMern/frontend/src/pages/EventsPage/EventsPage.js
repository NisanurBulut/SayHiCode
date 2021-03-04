import React, { Component } from 'react';
import * as classes from './EventsPage.module.css';
import Button from '@material-ui/core/Button';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';

export class EventsPage extends Component {
  state = {
    creating: false,
  };
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              Modal content
            </Modal>
          </React.Fragment>
        )}
        <div className={classes.eventsControl}>
          <button
            onClick={this.startCreateEventHandler}
            className="btn secondary"
          >
            Create event
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
