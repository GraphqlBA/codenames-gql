import React, { Component } from 'react'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './screens/Home'
import GameLanding from './screens/GameLanding'

const client = new ApolloClient({
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
