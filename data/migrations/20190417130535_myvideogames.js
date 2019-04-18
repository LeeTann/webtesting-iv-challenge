
exports.up = function(knex, Promise) {
  return knex.schema.createTable('videogames', tbl => {
      
      tbl.string('games', 255).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('videogames')
};
