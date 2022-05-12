const router = require('express').Router();

const authorization = require('../middlewares/authorization');
const checkDuplicate = require('../middlewares/checkDuplicate');
const Favourite = require("../models/favourite.model");

const { postFavourite, getAllFavourite } = require('./crud.controller');


router.post("/", [authorization, checkDuplicate], postFavourite(Favourite));

router.get("/", authorization, getAllFavourite(Favourite));

module.exports = router;