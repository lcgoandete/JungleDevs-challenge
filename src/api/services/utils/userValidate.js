const isValidEmail = require('./emailValidate');
const User = require('../../../database/models/user');
const isValidPassword = require('./passwordValidate');
const { BadRequest, Conflict } = require('./httpStatus');

const isValidUsername = async (username) => {
  if (username === '') {
    const error = { status: BadRequest, message: '"Username" is not allowed to be empty' };
    throw error;
  }

  if (!username) {
    const error = { status: BadRequest, message: '"Username" is required' };
    throw error;
  }

  if (username.length < 3) {
    const error = { 
      status: BadRequest,
      message: '"Username" length must be at least 3 characters long',
    };
    throw error;
  }

  const usernameExists = await User.query().where('username', username);
  if (usernameExists.length) {
    const error = { status: Conflict, message: '"Username" already registered' };
    throw error;
  }
  return true;
};

const isValidUser = async (email) => {
  const emailExists = await User.query()
    .select('email')
    .where('email', '=',  email);

  if (emailExists.length) {
    const error = { status: Conflict, message: '"Email" is already registered' };
    throw error;
  } 
  return emailExists;
};

const isValidUserFields = async (fields) => {
  await isValidUsername(fields.username);
  isValidEmail(fields.email);
  isValidPassword(fields.password);
  await isValidUser(fields.email);
};

module.exports = {
  isValidUserFields,
};
