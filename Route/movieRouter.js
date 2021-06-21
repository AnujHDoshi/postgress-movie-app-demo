const express = require('express');

const movieRoute = express.Router();

const movieController = require("../Controller/moviesController");

movieRoute.post("/add", movieController.addMovie);
movieRoute.get("/list", movieController.listMovie);
movieRoute.get("/search/:movieName", movieController.searchTitle);
movieRoute.put("/update/:movieName", movieController.updateMovie);
movieRoute.delete("/delete/:movieName", movieController.deleteMovie);

module.exports = movieRoute;