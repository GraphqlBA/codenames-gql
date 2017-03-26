import React, { PropTypes } from 'react'

import Card from './Card'
import './CardGrid.css'

function CardGrid ({ cards }) {
  const rows = cards.map(row => {
    return <div className='card-grid__row'>
      {row.map(card => <Card card={card} />)}
    </div>
  })

  return <div className='card-grid'>{rows}</div>
}

CardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object)
  )
}

export default CardGrid
