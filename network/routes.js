const express = require('express');
const products = require('../components/products/network');
const users = require('../components/users/network');
const comments = require('../components/comments/network');
const mail = require('../components/mails/network');

const routes = (server) => {
  server.use('/products', products);
  server.use('/users', users);
  server.use('/comments', comments);
  server.use('/mail', mail);
};

module.exports = routes;
