const articles = require('../services/articleService');
const { NotFound } = require('../services/utils/httpStatus');

const create = async (req, res) => {
  const { authorId, category, title, summary, firstParagraph, body } = req.body;
  const { authorization } = req.headers;
  const result = await articles.create(
    authorization,
    { authorId, category, title, summary, firstParagraph, body },
  );
  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  const result = await articles.getAll(authorization);
  
  if (!result.length) return res.status(NotFound).json({ message: 'Articles Not Found' });
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await articles.getById(authorization, Number(id));
  
  if (!result) return res.status(NotFound).json({ message: 'Article Not Found' });
  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { category, title, summary, firstParagraph, body } = req.body;
  const { authorization } = req.headers;
  const result = await articles.update(authorization, {
    id: Number(id),
    category,
    title,
    summary,
    firstParagraph,
    body
  });

  if (!result) return res.status(NotFound).json({ message: 'Article Not Found'});
  return res.status(200).json({ message: 'Article updated successfully.' });
};

const exclude = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await articles.exclude(authorization, Number(id));
  
  if (!result) return res.status(NotFound).json({ message: 'Article Not Found'});
  return res.status(200).json({ message: 'Article deleted successfully.' });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
