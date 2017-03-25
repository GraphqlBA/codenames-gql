exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('cards', (table) => {
      table.increments('id').primary().unsigned()
      table.string('name')
      table.timestamps(true, true)
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('cards')
  ])
)
