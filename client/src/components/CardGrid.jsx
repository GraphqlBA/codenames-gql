import React, { PropTypes } from 'react'

import Card from './Card'
import './CardGrid.css'

function CardGrid ({ words }) {
  const rows = words.map(row => {
    return <div className='card-grid__row'>
      {row.map(word => <Card word={word} />)}
    </div>
  })

  return <div className='card-grid'>{rows}</div>
}

CardGrid.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  )
}

export default CardGrid
