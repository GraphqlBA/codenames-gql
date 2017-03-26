import React, { PropTypes } from 'react'

import { TEAMS } from '../constants'
import './Card.css'

function Card ({ card, showUnselected = false }) {
  const classes = [
    'card',
    card.selected && 'card--is-selected',
    card.team === TEAMS.BLUE && 'card--blue-team',
    card.team === TEAMS.RED && 'card--red-team',
    showUnselected && 'card--hint-unselected'
  ].filter(Boolean).join(' ')

  return <div className={classes}>
    {card.word}
  </div>
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  showUnselected: PropTypes.bool
}

export default Card
