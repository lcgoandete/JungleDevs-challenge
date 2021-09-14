const { isValidToken } = require('./utils/tokenValidate');
const apiArticles = require('../../database/models/article');

const getQuery = async (category) => {
  const articles = await apiArticles
    .query()
    .select('category', 'title', 'summary')
    .where('category', category)
    .withGraphFetched('author')
    .modifyGraph('author', (builder) => builder.select('name', 'picture'));
  return articles;
}

const getById = async (authorization, id) => {
  if (!authorization) {
    const articles = await apiArticles
      .query()
      .findById(id)
      .select('category', 'title', 'summary', 'firstParagraph')
      .withGraphFetched('author')
      .modifyGraph('author', (builder) => builder.select('name', 'picture'));
    return articles;
  }

  isValidToken(authorization);
  const articles = await apiArticles
    .query()
    .findById(id)
    .select('category', 'title', 'summary', 'firstParagraph', 'body')
    .withGraphFetched('author')
    .modifyGraph('author', (builder) => builder.select('name', 'picture'));
  return articles;
}

module.exports = {
  getQuery,
  getById,
}
