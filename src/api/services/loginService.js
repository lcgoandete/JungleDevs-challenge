const User = require('../../database/models/user');
const { isValidLogin } = require('./utils/loginValidate');
const { generateToken } = require('./utils/tokenValidate');

const login = async (user) => {
  const userData = await isValidLogin(user);
  const token = generateToken(userData);
  return { token };
};

module.exports = {
  login
};
