import Card from './types/Card'
import Game from './types/Game'

const Query = `
  type Query {
    games: [Game]
  }

  type Mutation {
    gameCreate: Game
  }
`

export default [Query, Card, Game]
