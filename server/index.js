require('dotenv').config();
const colors = require('colors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const connectDB = require('./config/db');
const schema = require('./schema/schema');

const { NODE_ENV, PORT } = process.env;

const app = express();

connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: NODE_ENV === 'development',
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
