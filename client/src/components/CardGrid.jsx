import React, { PropTypes } from 'react'

import Card from './Card'
import './CardGrid.css'

function CardGrid ({ cards, cardsPerRow = 5, showUnselected }) {
  const rows = cards.reduce((acc, card, i) => {
    let row

    if (i % cardsPerRow === 0) {
      row = []
      acc.push(row)
    } else {
      row = acc[acc.length - 1]
    }

    row.push(card)

    return acc
  }, []).map(row => (
    <div className='card-grid__row'>
      {row.map(card => <Card card={card} showUnselected={showUnselected} />)}
    </div>
  ))

  return <div className='card-grid'>{rows}</div>
}

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cardsPerRow: PropTypes.number
}

export default CardGrid
