
exports.seed = async (knex) => {
  await knex('author').del()

  await knex('author').insert([
    { name: 'Luis1', picture: 'https://picture1.jpg'},
    { name: 'Luis2', picture: 'https://picture2.jpg'},
    { name: 'Luis3', picture: 'https://picture3.jpg'},
  ]);
};
