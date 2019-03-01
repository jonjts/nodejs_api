const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//Primeira rota
routes.get('/products/:id', ProductController.show);
routes.get('/products/', ProductController.index);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;