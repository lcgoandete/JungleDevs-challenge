const { BadRequest } = require('./httpStatus');

const isValidPassword = (password) => {
  if (password === '') {
    const error = { status: BadRequest, message: '"Password" is not allowed to be empty' };
    throw error;
  }

  if (!password) {
    const error = { status: BadRequest, message: '"Password" is required' };
    throw error;
  }

  const isValidPasswordFormat = /[0-9a-zA-Z$*]{6}/.test(password);
  if (!isValidPasswordFormat) {
    const error = { status: BadRequest, message: '"Password" length must be 6 characters long' };
    throw error;
  }
  return true;
};

module.exports = isValidPassword;