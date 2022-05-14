const authorization = require('../middlewares/authorization');

const Coupon = require('../models/coupon.model');

const { updateCoupon } = require('./crud.controller');

const router = require('express').Router();

router.post("/", authorization, updateCoupon(Coupon));

module.exports = router;