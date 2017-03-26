const Game = `
  type Game {
    id: Int!
    cards: [Card]
  }

  extend type Query {
    game(id: Int!): Game
  }
`

export default Game
