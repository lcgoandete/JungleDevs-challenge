const { BadRequest } = require('./httpStatus');

const isValidFields = (field) => {
  if (field === '') {
    const error = { status: BadRequest, message: '"field" is not allowed to be empty.' };
    throw error;
  }

  if (!field) {
    const error = { status: BadRequest, message: '"field" is required.' };
    throw error;
  }

  if (field.length < 3) {
    const error = { 
      status: BadRequest,
      message: '"field" length must be at least 3 characters long.',
    };
    throw error;
  }
  return true;
};

const isValidArticleFields = (fields) => {
  isValidFields(fields.category);
  isValidFields(fields.title);
  isValidFields(fields.summary);
  isValidFields(fields.firstParagraph);
  isValidFields(fields.body);
  
};

module.exports = {
  isValidArticleFields,
};
