exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('games', (table) => {
      table.increments('id').primary().unsigned()
      table.timestamps(true, true)
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('products')
  ])
)
