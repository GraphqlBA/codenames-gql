import React from 'react'

import CardGrid from '../components/CardGrid'
import { TEAMS } from '../constants'
import './Players.css'

const cards = [[
  { word: 'Lorem' },
  { word: 'ipsum', team: TEAMS.BLUE, selected: true },
  { word: 'dolor' },
  { word: 'sit' },
  { word: 'amet' }
], [
  { word: 'consectetur' },
  { word: 'adipiscing', team: TEAMS.BLUE },
  { word: 'elit' },
  { word: 'Cras', team: TEAMS.RED, selected: true },
  { word: 'vitae' }
], [
  { word: 'tellus' },
  { word: 'at' },
  { word: 'urna' },
  { word: 'rhoncus', selected: true },
  { word: 'pretium' }
], [
  { word: 'sit' },
  { word: 'amet' },
  { word: 'id' },
  { word: 'metus' },
  { word: 'Sed' }
]]

function Players () {
  return <div className='players-card-grid'>
    <CardGrid cards={cards} />
  </div>
}

export default Players
