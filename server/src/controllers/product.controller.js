const express = require('express');

const router = express.Router();

const Product = require("../models/product.model");

const { getAllPaginated, getOne, getGender } = require('./crud.controller');


router.get("/", getAllPaginated(Product));

router.get("/:id", getOne(Product));


module.exports = router;