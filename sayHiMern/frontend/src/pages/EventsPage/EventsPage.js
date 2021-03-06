import React, { Component } from 'react';
import * as classes from './EventsPage.module.css';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  CircularProgress,
} from '@material-ui/core';

import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';
import AuthContext from '../../context/auth-context';
import EventList from '../../components/Events/EventList/EventList';

export class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }
  componentDidMount() {
    this.fetchEvents();
  }
  componentWillUnmount() {
    this.isActive = false;
  }
  isActive = true;
  static contextType = AuthContext;
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null,
  };
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false, selectedEvent: null });
  };
  bookEventHandler = () => {
    if (!this.context.token) {
      this.setState({ selectedEvent: null });
      return;
    }
    const requestBody = {
      query: `
          mutation Bookevent($id: ID!){
            bookEvent(eventId: $id) {
              _id
             createdAt
             updatedAt
            }
          }
        `,
      variables: {
        id: this.state.selectedEvent._id,
      },
    };

    fetch('http://localhost:8000/smartBookingApi', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.context.token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({ selectedEvent: null });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showDetailHandler = (eventId) => {
    this.setState((prevState) => {
      const selectedEvent = prevState.events.find((e) => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };
  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const description = this.descriptionElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0
    ) {
      return;
    }
    const requestBody = {
      query: `
          mutation CreateEvent($title: String!, $description: String!, $price:Float!, $date: String! ){
            createEvent(eventInput: {title: $title, description: $description, price: $price, date: $date}) {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `,
      variables: {
        title: title,
        description: description,
        date: date,
        price: price,
      },
    };

    const token = this.context.token;

    fetch('http://localhost:8000/smartBookingApi', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then((resData) => {
        this.setState((prevState) => {
          console.log(resData.data);
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId,
            },
          });
          return { events: updatedEvents };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `,
    };

    fetch('http://localhost:8000/smartBookingApi', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then((resData) => {
        const events = resData.data.events;
        if (this.isActive) {
          this.setState({ events: events, isLoading: false });
        }
      })
      .catch((err) => {
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }
  render() {
    return (
      <div className={classes.eventPage}>
        {(this.state.creating || this.state.selectedEvent) && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText={'Confirm'}
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
                  Event's Description
                </FormHelperText>
              </FormControl>
            </form>
          </Modal>
        )}
        {this.context.token && (
          <div className={classes.eventsControl}>
            <button
              onClick={this.startCreateEventHandler}
              className="btn secondary"
            >
              Create event
            </button>
          </div>
        )}
        {this.state.selectedEvent && (
          <Modal
            title={this.state.selectedEvent.title}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookEventHandler}
            confirmText={this.context.token ? 'Book' : 'Confirm'}
          >
            <h2>
              {new Date(this.state.selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedEvent.description}</p>
          </Modal>
        )}
        {this.state.isLoading ? (
          <CircularProgress className={classes.Spinner} color="secondary" />
        ) : (
          <EventList
            events={this.state.events}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )}
      </div>
    );
  }
}

export default EventsPage;
