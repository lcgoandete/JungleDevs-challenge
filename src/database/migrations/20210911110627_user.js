exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.string('username', 15).notNullable().unique();
    table.string('email', 60).notNullable().unique();
    table.string('password', 32).notNullable();
    table.string('role', 13).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
