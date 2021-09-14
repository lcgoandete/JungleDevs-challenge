const multer = require('multer');
const path = require('path');

const multerConfig = {
  dest: path.resolve(__dirname, '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (_req, _file, cb) => {
      const fileName = `${ Date.now() }.jpg`;
      cb(null, fileName);
    },
    limits: {
      fileSize: 2097152, // 2 megabytes
    },
  }),
};

module.exports = multerConfig;
