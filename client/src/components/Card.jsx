import React, { PropTypes } from 'react'

import { TEAMS } from '../constants'
import './Card.css'

function Card ({ card }) {
  const classes = [
    'card',
    card.selected && 'card--is-selected',
    card.team === TEAMS.BLUE && 'card--blue-team',
    card.team === TEAMS.RED && 'card--red-team'
  ].filter(Boolean).join(' ')

  return <div className={classes}>
    {card.word}
  </div>
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card
