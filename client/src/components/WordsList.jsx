import React from 'react'

function WordsList({ cards }) {
  return (
    <ul>
      {cards.map(card => <li>{card.selected ? (<s>{card.word}</s>) : card.word}</li>)}
    </ul>
  )
}

export default WordsList
