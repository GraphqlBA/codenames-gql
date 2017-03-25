import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import Schema from './schema';

const myGraphQLSchema = Schema;
const PORT = 3000;

var app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
