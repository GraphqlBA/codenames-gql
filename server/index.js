import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from '@src/schema'
import resolvers from '@src/resolvers'
import { Model } from 'objection'
import knexConfig from './knexfile'
import Knex from 'knex'

const knex = Knex(knexConfig.development)
Model.knex(knex)

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
