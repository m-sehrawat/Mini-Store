const authorization = require('../middlewares/authorization');

const Coupon = require('../models/coupon.model');

const { updateCoupon, removeCoupon } = require('./crud.controller');

const router = require('express').Router();

router.post("/", authorization, updateCoupon(Coupon));

router.patch("/", authorization, removeCoupon(Coupon));

module.exports = router;