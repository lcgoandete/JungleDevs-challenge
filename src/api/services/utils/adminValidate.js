const { BadRequest, Unauthorized } = require('./httpStatus');

const isValidId = (id) => {
  if (id === '') {
    const error = { status: BadRequest, message: '"ID" is not allowed to be empty.' };
    throw error;
  }

  if (!id) {
    const error = { status: BadRequest, message: '"ID" is required.' };
    throw error;
  }

  if (typeof id !== 'number') {
    const error = { status: BadRequest, message: '"ID" must be a number.' };
    throw error;
  }
  return true;
};

const isValidRole = (role) => {
  if (role !== 'administrator') {
    const error = { status: Unauthorized, message: 'Unauthorized user.' };
    throw error;
  }
  return true;
};

module.exports = {
  isValidId,
  isValidRole,
};
