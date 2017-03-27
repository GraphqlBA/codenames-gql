import Card from './types/Card'
import Game from './types/Game'

const Query = `
  type Query {
    games: [Game]
  }

  type Mutation {
    gameCreate: Game
  }

  type Subscription {
    cardSelected(gameId: Int!): Card
  }
`

export default [Query, Card, Game]
