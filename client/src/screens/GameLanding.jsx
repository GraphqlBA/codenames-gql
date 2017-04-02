import React from 'react'
import { gql, graphql } from 'react-apollo'
import {
  Route
} from 'react-router-dom'

import Leader from './Leader'
import Players from './Players'
import Button from '../components/Button'

class GameLanding extends React.Component {
  componentWillReceiveProps (newProps) {
    if (this.props.data.loading && !newProps.data.loading) {
      newProps.subscribeToCardSelected({ gameId: this.props.match.params.gameId })
    }
  }

  render () {
    const { match, data } = this.props

    if (data.loading) {
      return <div>Loading...</div>
    }

    return <div>
      <Route exact path={match.url} render={() => (
        <div className='container'>
          <p style={{textAlign: 'center'}}>
            👋 Bienvenidx al juego `{match.params.gameId}`<br />
            <i>¿Sos jugador o lider?</i>
          </p>
          <div style={{marginTop: '.8em'}}>
            <Button style={{marginRight: '1.5em'}} to={`${match.url}/jugador`}>Jugador</Button>
            <Button to={`${match.url}/lider`}>Lider</Button>
          </div>
        </div>
      )} />

      <Route path={`${match.url}/lider`} render={() => (
        <Leader cards={data.game.cards} />
      )} />

      <Route path={`${match.url}/jugador`} render={() => (
        <Players cards={data.game.cards} />
      )} />
    </div>
  }
}

const Query = gql`
  query GetGame($id: Int!) {
    game(id: $id) {
      cards {
        id
        __typename
        name
        team
        selected
      }
    }
  }
`

const CardsSubscription = gql`
  subscription onCardSelected($gameId: Int!) {
    cardSelected(gameId: $gameId) {
      id
      __typename
      selected
    }
  }
`

export default graphql(Query, {
  options: ({ match }) => ({ variables: { id: match.params.gameId } }),
  props: props => {
    return {
      ...props,
      subscribeToCardSelected: params => {
        return props.data.subscribeToMore({
          document: CardsSubscription,
          variables: {
            gameId: params.gameId
          },
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) {
              return prev
            }

            const updatedCard = subscriptionData.data.cardSelected
            const newGame = { ...prev.game }
            newGame.cards = newGame.cards.map(card => {
              if (card.id !== updatedCard.id) {
                return card
              }

              return {
                ...card,
                ...updatedCard
              }
            })

            return { game: newGame }
          }
        })
      }
    }
  }
})(GameLanding)
