import React from 'react'

import CardGrid from '../components/CardGrid'
import './Players.css'

function Players ({ cards }) {
  return <div className='players-card-grid'>
    <CardGrid cards={cards} />
  </div>
}

export default Players
