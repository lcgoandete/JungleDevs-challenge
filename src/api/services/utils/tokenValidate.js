require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('./httpStatus');

const secret = process.env.SECRET_KEY;

const generateToken = (userData) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

  const { id, password, ...payload } = userData[0];
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const isValidToken = (authorization) => {
  try {
    if (!authorization) {
      const error = { status: Unauthorized, message: 'Token not found' };
      throw error;
    }
    const userData = jwt.verify(authorization, secret);
    return userData;
  } catch (error) {
    const err = { status: Unauthorized, message: 'Expired or invalid token' };
    throw err;
  }
};

module.exports = {
  generateToken,
  isValidToken,
};
