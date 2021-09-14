exports.up = function(knex) {
  return knex.schema.createTable('author', (table) => {
    table.increments('id').primary();
    table.string('name', 60).notNullable().unique();
    table.string('picture').notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('author');
};
