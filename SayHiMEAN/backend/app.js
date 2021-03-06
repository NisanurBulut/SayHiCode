const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config.json');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('../backend/grahql/schema');
const graphqlResolver = require('../backend/grahql/resolver');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// grahql

app.use(
  '/api',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

mongoose
  .connect(`mongodb://127.0.0.1:27017/${config.MONGO_DB}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8000, console.log('Connected to port 8000'));
  })
  .catch((err) => {
    console.log(err);
  });