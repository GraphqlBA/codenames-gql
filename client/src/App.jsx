import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './screens/Home'
import GameLanding from './screens/GameLanding'

const wsClient = new SubscriptionClient(`ws://localhost:5000/`, {
  reconnect: true
})

const networkInterface = createNetworkInterface({
  uri: '/api/graphql'
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: result => {
    if (result.id && result.__typename) {
      return result.__typename + result.id
    }

    return null
  }
})

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/:gameId' component={GameLanding} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
