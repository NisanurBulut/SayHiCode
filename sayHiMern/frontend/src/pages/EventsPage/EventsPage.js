import React, { Component } from 'react';
import * as classes from './EventsPage.module.css';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  List,
  ListItem,
  ListItemText,ListItemIcon
} from '@material-ui/core';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';
import AuthContext from '../../context/auth-context';

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

  static contextType = AuthContext;
  state = {
    creating: false,
    events: [],
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
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const event = { title, price, date, description };
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
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
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

    const token = this.context.token;

    fetch('http://localhost:8000/graphql', {
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
        this.fetchEvents();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchEvents() {
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

    fetch('http://localhost:8000/graphql', {
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
        console.log(resData);
        const events = resData.data.events;
        this.setState({ events: events });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const eventList = this.state.events.map((event) => {
      return (
        <ListItem  className={classes.eventListItem} button key={event._id}>
            <ListItemIcon>
            <EmojiEventsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={event.title} />
        </ListItem>
      );
    });
    return (
      <div className={classes.eventPage}>
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
         <List className={classes.eventList} component="nav">
          {eventList}
        </List>
      </div>
    );
  }
}

export default EventsPage;
