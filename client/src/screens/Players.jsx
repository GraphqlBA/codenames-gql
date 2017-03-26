import React from 'react'

import CardGrid from '../components/CardGrid'
import './Players.css'

const cards = [[
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet'
], [
  'consectetur',
  'adipiscing',
  'elit',
  'Cras',
  'vitae'
], [
  'tellus',
  'at',
  'urna',
  'rhoncus',
  'pretium'
], [
  'sit',
  'amet',
  'id',
  'metus',
  'Sed'
]]

function Players () {
  return <div className='players-card-grid'>
    <CardGrid words={cards} />
  </div>
}

export default Players
