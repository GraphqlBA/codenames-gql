const typeDefs = `
  type Game {
    id: Int!
  }

  type Query {
    games: [Game],
    game(id: Int!): Game
  }
`

export default [typeDefs]
