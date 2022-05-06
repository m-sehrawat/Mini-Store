const express = require('express');

const router = express.Router();

const Product = require("../models/product.model");
const { post, getAll } = require('./crud.controller');

router.post("/", post(Product));

router.get("/", getAll(Product));

module.exports = router;