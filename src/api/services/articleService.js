const Article = require('../../database/models/article');
const { isValidToken } = require('./utils/tokenValidate');
const { isValidArticleFields } = require('./utils/articleValidate');
const { isValidId, isValidRole } = require('./utils/adminValidate');

const fieldsArticle = ['category', 'title', 'summary', 'firstParagraph', 'body']

const create = async (authorization, article) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidArticleFields(article);
  const result = await Article.query().insert(article);
  return result;
};

const getAll = async (authorization) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  const result = await Article.query().select(fieldsArticle);
  return result;
};

const getById = async (authorization, id) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidId(id);
  const result = await Article.query().select(fieldsArticle).findById(id);
  return result;
};

const update = async (authorization, article) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidId(article.id);
  isValidArticleFields(article);
  const result = await Article.query().findById(article.id).patch(article);
  return result;
};

const exclude = async (authorization, id) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidId(id);
  const result = await Article.query().deleteById(id);
  return result;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};