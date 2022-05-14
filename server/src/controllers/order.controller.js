const authorization = require('../middlewares/authorization');
const Order = require('../models/order.model');
const { postItem, getAllItems } = require('./crud.controller');

const router = require('express').Router();

router.post("/",authorization, postItem(Order));

router.post("/", authorization, getAllItems(Order));

module.exports = router;