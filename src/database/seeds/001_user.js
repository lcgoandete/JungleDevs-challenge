
exports.seed = async (knex) => {
  await knex('user').del();

  await knex('user').insert([
    { username: 'Luis1', email: 'luis1@email.com', password: 'e10adc3949ba59abbe56e057f20f883e', role: 'administrator' },
    { username: 'Luis2', email: 'luis2@email.com', password: 'e10adc3949ba59abbe56e057f20f883e', role: 'user' },
    { username: 'Luis3', email: 'luis3@email.com', password: 'e10adc3949ba59abbe56e057f20f883e', role: 'administrator' },
  ]);
};
