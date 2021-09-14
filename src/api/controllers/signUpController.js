const signUp = require('../services/signUpService');

const create = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await signUp.create({ username, email, password, role: 'user' });
  return res.status(201).json(result);
};

module.exports = { create };
