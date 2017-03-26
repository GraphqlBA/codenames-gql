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
      <CardGrid cards={cards} showUnselected />
      <div className='team-cards'>
        <div>
          Blue Cards:
          <WordsList cards={blueCards} />
        </div>
        <div>
          Red Cards:
          <WordsList cards={redCards} />
        </div>
      </div>
    </div>
  </div>
}

export default Leader
