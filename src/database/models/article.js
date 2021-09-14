const { Model } = require('objection');

class Article extends Model {
  static get tableName() {
    return 'article';
  }
  static get relationMappings() {
    const Author = require('./author');
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Author,
        join: {
          from: 'article.authorId',
          to: 'author.id',
        },
      },
    };
  }
}

module.exports = Article;
