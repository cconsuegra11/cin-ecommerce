const { create, getAll } = require('../controllers/purchases.controllers')
const express = require('express')

const routerPurchase = express.Router();

routerPurchase.route('/')
  .get(getAll)
  .post(create)

module.exports = routerPurchase