const authorization = require('../middlewares/authorization');
const Order = require('../models/order.model');
const { postItem, getAllOrders } = require('./crud.controller');

const router = require('express').Router();

router.post("/",authorization, postItem(Order));

router.get("/", authorization, getAllOrders(Order));

module.exports = router;