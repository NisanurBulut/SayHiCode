const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Event = require('./models/event');
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
    input EventInput{
      title:String!
      description:String!
      price:Float
      date:String!
    }
    type RootQuery {
        events:[Event!]!
    }
    type RootMutation{
        CreateEvent(eventInput:EventInput):Event
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
        });
        console.log(event);
        return event
          .save()
          .then((result) => {
            console.log(result);
            return { ...result._doc, _id: event.id };
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
