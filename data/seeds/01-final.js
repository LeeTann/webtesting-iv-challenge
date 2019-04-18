
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets id
  return knex('videogames').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        {games: 'Fantasy7'},
        {games: 'Fantasy8'},
        {games: 'Fantasy9'},
        {games: 'Nier Automata'}
      ]);
    });
};
