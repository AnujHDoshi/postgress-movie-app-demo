const express = require('express');

const movieRoute = express.Router();

const movieController = require("../Controller/moviesController");

movieRoute.post("/add", movieController.addMovie);

module.exports = movieRoute;