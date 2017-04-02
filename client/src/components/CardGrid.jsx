import React, { PropTypes } from 'react'

import Card from './Card'
import './CardGrid.css'

function CardGrid ({ cards, cardsPerRow = 5, isLeader }) {
  return (
    <div className='card-grid'>
      <div className='card-grid__container'>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            isLeader={isLeader} />
        ))}
      </div>
    </div>
  )
}

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cardsPerRow: PropTypes.number
}

export default CardGrid
