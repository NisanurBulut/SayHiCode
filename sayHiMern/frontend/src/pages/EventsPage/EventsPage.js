import React, { Component } from 'react';
import * as classes from './EventsPage.module.css';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
} from '@material-ui/core';
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
              <form className={classes.EventForm}>
                <FormControl>
                  <InputLabel htmlFor="title">Title</InputLabel>
                  <Input id="title"/>
                  <FormHelperText id="title">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <Input id="price"/>
                  <FormHelperText id="price">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
                <FormControl m={1}>
                  <InputLabel htmlFor="date">Date</InputLabel>
                  <Input id="date"/>
                  <FormHelperText id="date">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="date">Description</InputLabel>
                  <Input id="description"/>
                  <FormHelperText id="description">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
              </form>
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
