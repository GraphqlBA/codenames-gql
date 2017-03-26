import React, { PropTypes } from 'react'

import './Card.css'

function Card ({ word }) {
  return <div className='card'>{word}</div>
}

Card.propTypes = {
  word: PropTypes.string.isRequired
}

export default Card
