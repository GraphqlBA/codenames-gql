import React from 'react'
import './WordsList.css'

function WordsList ({ cards, team }) {
  const classNames = (card) => [
    team,
    card.selected && 'selected'
  ].filter(Boolean).join(' ')

  return (
    <ul className='WordsList'>
      {cards.map(card => (
        <li key={card.id} className={classNames(card)}>
          {card.name}
        </li>
      ))}
    </ul>
  )
}

export default WordsList
