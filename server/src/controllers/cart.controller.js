const authorization = require('../middlewares/authorization');
const checkQuantity = require('../middlewares/checkQuantity');
const Cart = require('../models/cart.model');

const { postCart, getAllFavourite,updateOne, deleteOne } = require('./crud.controller');

const router = require('express').Router();

router.post("/", [authorization, checkQuantity], postCart(Cart));

router.get("/", authorization, getAllFavourite(Cart));

router.patch("/:id", updateOne(Cart));

router.delete("/:id", deleteOne(Cart));

module.exports = router;