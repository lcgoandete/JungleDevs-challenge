const { Model } = require('objection');

class Author extends Model {
  static get tableName() {
    return 'author';
  }
  static get relationMappings() {
    const Article = require('./article');
    return {
      article: {
        relation: Model.HasManyRelation,
        modelClass: Article,
        join: {
          from: 'author.id',
          to: 'article.authorId',
        },
      },
    };
  }
}

module.exports = Author;
