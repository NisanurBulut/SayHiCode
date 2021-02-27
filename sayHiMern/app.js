const express = require('express');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
    type RootQuery {
        events:[String!]!
    }
    type RootMutation{
        CreateEvent(name:String):String
    }
    schema{
        query:RootQuery
        mutation:RootMutation
    }
    `),
    rootValue: {
      events: (args) => {
        return ['Nisanur', 'Furkan'];
      },
      CreateEvent: (args) => {
        const eventName = args.name;
        return eventName;
      }
    },
    graphiql:true
  })
);


app.listen(3000);
