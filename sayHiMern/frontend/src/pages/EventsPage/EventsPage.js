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
  constructor(props) {
    super(props);

    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }
  state = {
    creating: false,
  };
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const description = this.descriptionElRef.current.value;
    const price = this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const event = { title, price, date, description };
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      price.trim().length === 0 ||
      date.trim().length === 0
    ) {
      return;
    }
    console.log(event);
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
                  <Input id="title" inputRef={this.titleElRef} />
                  <FormHelperText id="title">Event's Title</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <Input id="price" type="number" inputRef={this.priceElRef} />
                  <FormHelperText id="price">Event's Price</FormHelperText>
                </FormControl>
                <FormControl m={1}>
                  <InputLabel htmlFor="date"></InputLabel>
                  <Input id="date" type="date" inputRef={this.dateElRef} />
                  <FormHelperText id="date">Event's Date</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="date">Description</InputLabel>
                  <Input id="description" inputRef={this.descriptionElRef} />
                  <FormHelperText id="description">
                    Event!s Description
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
