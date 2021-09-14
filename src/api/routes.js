const multer = require('multer');
const rescue = require('express-rescue');
const routes = require('express').Router();
const multerConfig = require('./config/multer');

const logins = require('./controllers/loginController');
const signUp = require('./controllers/signUpController');
const authors = require('./controllers/authorController');
const articles = require('./controllers/articleController');
const apiArticles = require('./controllers/apiArticleController');

routes.post('/api/login', rescue(logins.login));

routes.post('/api/sign-up', rescue(signUp.create));

routes.get('/api/admin/authors', rescue(authors.getAll));
routes.get('/api/admin/authors/:id', rescue(authors.getById));
routes.post('/api/admin/authors', multer(multerConfig).single('image'), rescue(authors.create));
routes.put('/api/admin/authors/:id', rescue(authors.update));
routes.delete('/api/admin/authors/:id', rescue(authors.exclude));

routes.get('/api/admin/articles', rescue(articles.getAll));
routes.get('/api/admin/articles/:id', rescue(articles.getById));
routes.post('/api/admin/articles', rescue(articles.create));
routes.put('/api/admin/articles/:id', rescue(articles.update));
routes.delete('/api/admin/articles/:id', rescue(articles.exclude));

routes.get('/api/articles', rescue(apiArticles.getQuery));
routes.get('/api/articles/:id', rescue(apiArticles.getById));

module.exports = routes;
