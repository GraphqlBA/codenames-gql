import Card from '@src/models/Card'

export default {
  all: () => Card.query().eager('game'),
  byId: (id) => Card.query().eager('game').findById(id),
  select: (id) => Card.query().patchAndFetchById(id, { selected: true }),
  unselect: (id) => Card.query().patchAndFetchById(id, { selected: false })
}
