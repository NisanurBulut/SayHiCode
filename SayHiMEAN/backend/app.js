const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config.json');
const { graphqlHTTP } = require('express-graphql');

const graphqlSchema = require('./grahql/appSchema');
const graphqlResolver = require('./grahql/appResolver');
const app = express();

app.use(cors());

// grahql

app.use(bodyParser.json());

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb://127.0.0.1:27017/${config.MONGO_DB}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    app.listen(8000, console.log('Connected to port 8000'));
  })
  .catch((err) => {
    console.log(err);
  });
