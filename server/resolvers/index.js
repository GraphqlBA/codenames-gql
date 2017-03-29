import GameConnector from '@src/connectors/GameConnector'
import CardConnector from '@src/connectors/CardConnector'

export default {
  Query: {
    games () {
      return GameConnector.all()
    },
    game (root, { id }) {
      return GameConnector.byId(id)
    },
    cards () {
      return CardConnector.all()
    },
    card (root, { id }) {
      return CardConnector.byId(id)
    }
  },
  Mutation: {
    gameCreate () {
      return GameConnector.create()
    },
    cardSelect (root, { id }) {
      return CardConnector.select(id)
    },
    cardUnselect (root, { id }) {
      return CardConnector.unselect(id)
    }
  },
  Subscription: {
    cardSelected: card => card
  }
}
