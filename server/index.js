import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const PORT = 3000

var app = express()

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)
