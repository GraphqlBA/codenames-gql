import React from 'react'
import {
  Link
} from 'react-router-dom'

function GameLanding ({ match }) {
  return <div>
    Welcome to the {match.params.gameId} game, are you a player or a team leader?
    <ul>
      <li><Link to={`/${match.params.gameId}/leader`}>Leader</Link></li>
      <li><Link to={`/${match.params.gameId}/players`}>Players</Link></li>
    </ul>
  </div>
}

export default GameLanding
