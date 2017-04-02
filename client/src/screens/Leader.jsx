import React from 'react'

import CardGrid from '../components/CardGrid'
import WordsList from '../components/WordsList'
import { TEAMS } from '../constants'

import './Leader.css'

function Leader ({ cards }) {
  const blueCards = cards.filter(card => card.team === TEAMS.BLUE)
  const redCards = cards.filter(card => card.team === TEAMS.RED)

  return <div>
    <div className='leaders-board'>
      <div className='team-cards'>
        <div>
          <WordsList cards={blueCards} team='blue' />
        </div>
        <div>
          <WordsList cards={redCards} team='red' />
        </div>
      </div>
      <CardGrid cards={cards} isLeader />
    </div>
  </div>
}

export default Leader
