const authorization = require('../middlewares/authorization');
const checkQuantity = require('../middlewares/checkQuantity');
const Cart = require('../models/cart.model');

const { postCart, getAllFavourite } = require('./crud.controller');

const router = require('express').Router();

router.post("/", [authorization, checkQuantity], postCart(Cart));

router.get("/", authorization, getAllFavourite(Cart));

module.exports = router;