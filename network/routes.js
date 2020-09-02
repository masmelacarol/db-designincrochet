const express = require('express');
const products = require('../components/products/network');
const users = require('../components/users/network');

const routes = (server) => {
  server.use('/products', products);
  server.use('/users', users);
};

module.exports = routes;
