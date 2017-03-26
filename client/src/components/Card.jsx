import React, { PropTypes } from 'react'
import { gql, graphql } from 'react-apollo'

import { TEAMS } from '../constants'
import './Card.css'

function Card ({ card, showUnselected = false, selectCard }) {
  const classes = [
    'card',
    card.selected && 'card--is-selected',
    card.team === TEAMS.BLUE && 'card--blue-team',
    card.team === TEAMS.RED && 'card--red-team',
    showUnselected && 'card--hint-unselected'
  ].filter(Boolean).join(' ')

  return <div className={classes} onClick={() => selectCard(card.id)}>
    {card.name}
  </div>
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  showUnselected: PropTypes.bool
}

const Mutation = gql`
  mutation SelectCard($id: Int!) {
    cardSelect(id: $id) {
      id
      __typename
      selected
    }
  }
`

export default graphql(Mutation, {
  props: ({ mutate }) => ({
    selectCard: (id) => mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        cardSelect: {
          __typename: 'Card',
          id: id,
          selected: true
        }
      }
    })
  })
})(Card)
