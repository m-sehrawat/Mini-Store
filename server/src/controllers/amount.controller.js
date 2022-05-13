const authorization = require('../middlewares/authorization');

const checkDuplicateAmount = require('../middlewares/checkDuplicateAmount');

const Amount = require('../models/amount.model');

const { postAmount, getAmount } = require('./crud.controller');

const router = require('express').Router();


router.post("/", [authorization, checkDuplicateAmount], postAmount(Amount));

router.get("/", authorization, getAmount(Amount));

module.exports = router;