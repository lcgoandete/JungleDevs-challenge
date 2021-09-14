const { BadRequest } = require('./httpStatus');

const isValidEmail = (email) => {
  if (email === '') {
    const error = { status: BadRequest, message: '"Email" is not allowed to be empty' };
    throw error;
  }

  if (!email) {
    const error = { status: BadRequest, message: '"Email" is required' };
    throw error;
  }

  const isValidEmailFormat = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email);
  if (!isValidEmailFormat) {
    const error = { status: BadRequest, message: '"Email" must be a valid email' };
    throw error;
  }
  return true;
};

module.exports = isValidEmail;
