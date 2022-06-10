require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const { NODE_ENV, PORT } = process.env;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: NODE_ENV === 'development',
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
