
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {name: 'Diversos'},
        {name: 'Lanches'},
        {name: 'Carnes'},
        {name: 'Massas'},
        {name: 'Pizzas'},
        {name: 'Japonesa'},
        {name: 'Chinesa'},
        {name: 'Mexicano'},
        {name: 'Brasileira'},
        {name: 'Italiana'},
        {name: 'Árabe'},
      ]);
    });
};
