const apiArticles = require('../services/apiArticleService');
const { NotFound } = require('../services/utils/httpStatus');

const getQuery = async (req, res) => {
  const { category } = req.query;
  const result = await apiArticles.getQuery(category);
  
  if (!result.length) return res.status(NotFound).json({ message: 'Article Not Found' });
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await apiArticles.getById(authorization, id);
  
  if (!result) return res.status(NotFound).json({ message: 'Article Not Found' });
  return res.status(200).json(result);
};

module.exports = {
  getQuery,
  getById,
};
