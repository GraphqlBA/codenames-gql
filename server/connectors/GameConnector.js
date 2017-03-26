import Game from '@src/models/Game'
import Card from '@src/models/Card'
import { getCardsForGame } from '@src/modules/cards'

export default {
  all: () => Game.query().eager('cards'),
  byId: (id) => Game.query().eager('cards').findById(id),
  create: () => {
    Game
      .query()
      .insert({})
      .then(game => {
        getCardsForGame(game.id).map(card => {
          Card.query().insert(card).then()
        })
      })
  }
}
