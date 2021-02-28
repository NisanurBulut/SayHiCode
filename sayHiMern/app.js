const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const events = [];

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
        return events;
      },
      CreateEvent: (args) => {
        const event = {
          _id: Math.random().toString(),
          title: args.eventInput.title,
          description: args.eventInput.description,
          date: args.eventInput.date,
          price: +args.eventInput.price,
        };
        console.log(event);
        events.push(event);
        return event;
      },
    },
    graphiql: true,
  })
);

app.listen(3000);
