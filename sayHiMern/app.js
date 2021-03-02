const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const grapqlSchema=require('./graphql/schema/index');
const graphqlResolvers=require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');
const app = express();

app.use(isAuth);
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema:grapqlSchema,
    rootValue:graphqlResolvers,
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
