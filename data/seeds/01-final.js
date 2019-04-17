
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videogames').del()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        {id: 1, games: 'Fantasy7'},
        {id: 2, games: 'Fantasy8'},
        {id: 3, games: 'Fantasy9'}
      ]);
    });
};
