const md5 = require('md5');
const { NotFound } = require('./httpStatus');
const isValidEmail = require('./emailValidate');
const isValidPassword = require('./passwordValidate');
const User = require('../../../database/models/user');

const isValidUser = async (email, passwd) => {
  const emailExists = await User.query()
    .select('id', 'username', 'email', 'password', 'role')
    .where('email', email);

  const password = md5(passwd);

  if (!emailExists.length || password !== emailExists[0].password) {
    const error = { status: NotFound, message: 'Invalid username or password' };
    throw error;
  } 
  return emailExists;
};

const isValidLogin = async (user) => {
  const { email, password } = user;
  isValidEmail(email);
  isValidPassword(password);
  const userData = await isValidUser(email, password);
  
  return userData;
};

module.exports = {
  isValidLogin,
};
