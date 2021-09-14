const authors = require('../services/authorService');
const { NotFound } = require('../services/utils/httpStatus');

const create = async (req, res) => {
  const { name } = req.body;
  const { filename } = req.file;
  const { authorization } = req.headers;
  const result = await authors.create(authorization, name, filename);
  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  const result = await authors.getAll(authorization);
  
  if (!result.length) return res.status(NotFound).json({ message: 'Authors Not Found' });
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await authors.getById(authorization, Number(id));
  
  if (!result) return res.status(NotFound).json({ message: 'Author Not Found' });
  return res.status(200).json(result);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, picture } = req.body;
  const { authorization } = req.headers;
  const result = await authors.update(authorization, { id: Number(id), name, picture });
  
  if (!result) return res.status(NotFound).json({ message: 'Author Not Found' });
  return res.status(200).json({ message: 'Author updated successfully.' });
};

const exclude = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await authors.exclude(authorization, Number(id));
  
  if (!result) return res.status(NotFound).json({ message: 'Author Not Found' });
  return res.status(200).json({ message: 'Author deleted successfully.' });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
