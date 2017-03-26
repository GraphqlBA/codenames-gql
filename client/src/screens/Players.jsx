import React from 'react'

import CardGrid from '../components/CardGrid'
import { cards } from '../fakeData'
import './Players.css'

function Players () {
  return <div className='players-card-grid'>
    <CardGrid cards={cards} />
  </div>
}

export default Players
