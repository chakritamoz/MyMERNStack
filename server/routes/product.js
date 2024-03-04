const express = require('express');
const {
  findAll,
  findOne,
  create,
  update,
  remove
} = require('../contollers/product');

const router = express.Router();

// http://localhost:8080/product
router.get('/product', findAll);

// http://localhost:8080/product/id
router.get('/product/:id', findOne);

// http://localhost:8080/product
router.post('/product', create);

// http://localhost:8080/product/id
router.put('/product/:id', update);

// http://localhost:8080/product/id
router.delete('/product/:id', remove);

module.exports = router;