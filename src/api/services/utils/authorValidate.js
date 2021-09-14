const { BadRequest, Conflict } = require('./httpStatus');
const Author = require('../../../database/models/author');

const isValidName = async (name) => {
  if (name === '') {
    const error = { status: BadRequest, message: '"Name" is not allowed to be empty.' };
    throw error;
  }

  if (!name) {
    const error = { status: BadRequest, message: '"Name" is required.' };
    throw error;
  }

  if (name.length < 3) {
    const error = { 
      status: BadRequest,
      message: '"Name" length must be at least 3 characters long.',
    };
    throw error;
  }

  const nameExists = await Author.query().where('name', name);
  if (nameExists.length) {
    const error = { status: Conflict, message: '"Name" already registered' };
    throw error;
  }
  return true;
};

const isValidPicture = async (picture) => {
  if (picture === '') {
    const error = { status: BadRequest, message: '"Picture" is not allowed to be empty.' };
    throw error;
  }

  if (!picture) {
    const error = { status: BadRequest, message: '"Picture" is required.' };
    throw error;
  }
  return true;
};

const isValidAuthorFields = async (fields) => {
  await isValidName(fields.name);
  isValidPicture(fields.picture);
};

module.exports = {
  isValidAuthorFields,
};
