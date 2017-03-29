import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { SubscriptionManager } from 'graphql-subscriptions'
import { pubsub } from './pubsub'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import typeDefs from '@src/schema'
import resolvers from '@src/resolvers'
import { Model } from 'objection'
import knexConfig from './knexfile'
import Knex from 'knex'

const knex = Knex(knexConfig.development)
Model.knex(knex)

knex.migrate.latest()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
  setupFunctions: {
    cardSelected: (options, args) => ({
      cardSelected: {
        filter: card => card.game_id === Number(args.gameId)
      }
    })
  }
})

const PORT = 3000
const WS_PORT = 5000

var app = express()

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)

const websocketServer = createServer((request, response) => {
  response.writeHead(404)
  response.end()
})

websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
))

const subscriptionsServer = new SubscriptionServer(
  {
    subscriptionManager: subscriptionManager
  },
  {
    server: websocketServer
  }
)
