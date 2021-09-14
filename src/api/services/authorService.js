const Author = require('../../database/models/author');
const { isValidToken } = require('./utils/tokenValidate');
const { isValidAuthorFields } = require('./utils/authorValidate');
const { isValidRole, isValidId } = require('./utils/adminValidate');

const fieldsAuthor = ['id', 'name', 'picture'];

const create = async (authorization, name, filename) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  const picture = `https://${filename}`;
  await isValidAuthorFields({ name, picture });
  
  const result = await Author.query().insert({ name, picture });
  return result;
};

const getAll = async (authorization) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  
  const result = await Author.query().select(fieldsAuthor);
  return result;
};

const getById = async (authorization, id) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidId(id);
  
  const result = await Author.query().select(fieldsAuthor).findById(id);
  return result;
};

const update = async (authorization, author) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidId(author.id);
  isValidAuthorFields(author);
  
  const result = await Author.query().findById(author.id).patch(author);
  return result;
};

const exclude = async (authorization, id) => {
  const tokenData = isValidToken(authorization);
  isValidRole(tokenData.role);
  isValidId(id);
  isValidRole(tokenData.role);
  
  const result = await Author.query().deleteById(id);
  return result;
};


module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
