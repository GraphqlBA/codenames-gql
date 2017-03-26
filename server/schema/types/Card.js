const Card = `
  enum Team {
    RED
    BLUE
    DEATH
    NEUTRAL
  }

  type Card {
    id: Int!
    name: String!
    game: Game!
    selected: Boolean!
    team: Team
  }

  extend type Query {
    cards: [Card]
    card(id: Int!): Card
  }
`

export default Card
