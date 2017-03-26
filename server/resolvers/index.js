import GameConnector from '@src/connectors/GameConnector'

export default {
  Query: {
    games () {
      return GameConnector.all()
    },
    game (root, args) {
      const { id } = args
      return GameConnector.byId(id)
    },
    cards () {
      return []
    },
    card (root, args) {
      const { id } = args
      return {
        id
      }
    }
  },
  Mutation: {
    gameCreate () {
      return GameConnector.create()
    }
  }
}
