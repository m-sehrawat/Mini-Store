const router = require('express').Router();

const authorization = require('../middlewares/authorization');
const checkDuplicate = require('../middlewares/checkDuplicate');
const Favourite = require("../models/favourite.model");

const {  getAllFavourite, deleteOne, postItem } = require('./crud.controller');


router.post("/", [authorization, checkDuplicate], postItem(Favourite));

router.get("/", authorization, getAllFavourite(Favourite));

router.delete("/:id", deleteOne(Favourite));

module.exports = router;