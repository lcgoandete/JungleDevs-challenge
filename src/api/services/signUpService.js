const md5 = require('md5');
const User = require('../../database/models/user');
const { generateToken } = require('./utils/tokenValidate');
const { isValidUserFields } = require('./utils/userValidate');

const create = async (user) => {
  await isValidUserFields(user);
  const hashPassword = md5(user.password);
  const newUser = { ...user, password: hashPassword };
  
  const userData = await User.query().insert(newUser);

  const token = generateToken([userData]);
  return { token };
};

module.exports = {
  create
};
