import Card from '@src/models/Card'
import pubsub from '@src/pubsub'

export default {
  all: () => Card.query().eager('game'),
  byId: (id) => Card.query().eager('game').findById(id),
  select: (id) => {
    return Card
      .query()
      .patchAndFetchById(id, { selected: true })
      .then(card => {
        pubsub.publish('cardSelected', card)
        return card
      })
  },
  unselect: (id) => Card.query().patchAndFetchById(id, { selected: false })
}
