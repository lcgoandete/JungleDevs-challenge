exports.up = function(knex) {
  return knex.schema.createTable('article', (table) => {
    table.increments('id').primary();
    table.string('category').notNullable().unique();
    table.string('title').notNullable().unique();
    table.string('summary').notNullable();
    table.string('firstParagraph').notNullable();
    table.string('body').notNullable();
    
    table.integer('authorId')
      .references('id')
      .inTable('author')
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('article');
};
