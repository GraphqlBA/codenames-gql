import React from 'react'

function WordsList({ cards }) {
  return (
    <ul>
      {cards.map(card => <li key={card.id}>{card.selected ? (<s>{card.name}</s>) : card.name}</li>)}
    </ul>
  )
}

export default WordsList
