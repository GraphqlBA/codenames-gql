import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './screens/Home'
import Leader from './screens/Leader'
import Players from './screens/Players'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/leader' component={Leader} />
          <Route path='/players' component={Players} />
        </div>
      </Router>
    )
  }
}

export default App
