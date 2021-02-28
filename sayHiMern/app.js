const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Event = require('./models/event');
const User = require('./models/user');
const user = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
    type Event {
      _id:ID
      title:String!
      description:String!
      price:Float!
      date:String!
    }
    type User {
      _id:ID
      email:String!
      password:String
    }
    input EventInput{
      title:String!
      description:String!
      price:Float
      date:String!
    }
    input UserInput {
      email:String!
      password:String!
    }
    type RootQuery {
        events:[Event!]!
    }
    type RootMutation{
        CreateEvent(eventInput:EventInput):Event
        CreateUser(userInput:UserInput):User
    }
    schema{
        query:RootQuery
        mutation:RootMutation
    }
    `),
    rootValue: {
      events: (args) => {
        return Event.find()
          .then((events) => {
            return events.map((event) => {
              return { ...event._doc, _id: event._doc._id.toString() };
            });
          })
          .catch((err) => {
            throw err;
          });
      },
      CreateEvent: (args) => {
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          date: new Date(args.eventInput.date),
          price: +args.eventInput.price,
          creator: '603b9c3e2031073b78512b10',
        });
        let createdEvent;
        return event
          .save()
          .then((result) => {
            createdEvent = { ...result._doc, _id: event.id };
            return user.findById('603b9c3e2031073b78512b10');
          })
          .then((user) => {
            if (!user) {
              return new Error('User is not defined');
            }
            user.createdEvents.push(event);
            return user.save();
          })
          .then((result) => {
            return createdEvent;
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      },
      CreateUser: (args) => {
        User.findOne({
          email: args.userInput.email,
        })
          .then((user) => {
            if (user) {
              throw new Error('User is already defined');
            }
            return bcrypt.hash(args.userInput.password, 12);
          })
          .then((hashedPassword) => {
            const user = new User({
              email: args.userInput.email,
              password: hashedPassword,
            });
            return user.save();
          })
          .then((result) => {
            return { ...result._doc, password: null, _id: result.id };
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      },
    },
    graphiql: true,
  })
);

mongoose
  .connect(`mongodb://127.0.0.1:27017/${process.env.MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('listening');
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
