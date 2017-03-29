import React from 'react'
import { gql, graphql } from 'react-apollo'
import {
  Link,
  Route
} from 'react-router-dom'

import Leader from './Leader'
import Players from './Players'

class GameLanding extends React.Component {
  componentWillReceiveProps(newProps) {
    if (this.props.data.loading && !newProps.data.loading) {
      newProps.subscribeToCardSelected({ gameId: this.props.match.params.gameId });
    }
  }

  render() {
    const { match, data } = this.props;

    if (data.loading) {
      return <div>Loading...</div>
    }

    return <div>
      <Route exact path={match.url} render={() => (
        <div>
          Welcome to the {match.params.gameId} game, are you a player or a team leader?
          <ul>
            <li><Link to={`${match.url}/leader`}>Leader</Link></li>
            <li><Link to={`${match.url}/players`}>Players</Link></li>
          </ul>
        </div>
      )} />

      <Route path={`${match.url}/leader`} render={() => (
        <Leader cards={data.game.cards} />
      )} />

      <Route path={`${match.url}/players`} render={() => (
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
