import React from 'react'
import { gql, graphql } from 'react-apollo'
import {
  Link,
  Route
} from 'react-router-dom'

import Leader from './Leader'
import Players from './Players'

function GameLanding ({ match, data }) {
  if (data.loading) {
    return <div>Loading...</div>
  }

  return <div>
    <Route exact path={match.url} render={() => (
      <div>
        Welcome to the {match.params.gameId} game, are you a player or a team leader?
        <ul>
          <li><Link to={`${match.url}/leader`}>Leader</Link></li>
          <li><Link to={`${match.url}/players`}>Players</Link></li>
        </ul>
      </div>
    )} />

    <Route path={`${match.url}/leader`} render={() => (
      <Leader cards={data.game.cards} />
    )} />

    <Route path={`${match.url}/players`} render={() => (
      <Players cards={data.game.cards} />
    )} />
  </div>
}

const Query = gql`
  query GetGame($id: Int!) {
    game(id: $id) {
      cards {
        id
        __typename
        name
        team
        selected
      }
    }
  }
`

export default graphql(Query, {
  options: ({ match }) => ({ variables: { id: match.params.gameId } })
})(GameLanding)
