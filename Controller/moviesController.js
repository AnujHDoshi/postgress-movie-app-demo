const lodash = require("lodash");
const moment = require("moment");
const { Op } = require('sequelize');

const {Movie} = require('../Model')

const addMovie = async (req, res) => {
    const movieObject = req.body;
    
    if(!movieObject.title || !movieObject.year || !movieObject.length){
        return res.status(400).json({message:"Please fill all the mandatory fields"});
    }
   
    const movieId = `MI-${moment().unix()}`;
    console.log(movieObject.title)
    const movieRecord = {
        movieId: movieId,
        title: movieObject.title,
        year: movieObject.year,
        length: movieObject.length,
        actor: movieObject.actor
    }

    const result = await Movie.create(movieRecord);

    console.log(result.toJSON());
    return res.json({message:"Successfully added movies."});
}

const listMovie = async (req,res) => {
    const movie = await Movie.findAll();

    return res.send(movie)
}

const searchTitle = async(req,res) => {
    const {movieName} = req.params;

    const searchResult = await Movie.findAll({
        where: {
            title: {
                [Op.like] : `%${movieName}%`
            }
        }
    })

    return res.send(searchResult)
}
const updateMovie = async (req, res) => {
    const { movieName } = req.params;
    const { year } = req.body;
    const updateResult = await Movie.update({ year: year}, {
        where: {
            title:`${movieName}`
        }
    });
    return res.json({"message":"Movie updated succesfully."})
    
}

const deleteMovie = async (req, res) => {
    const { movieName } = req.params;
    const deleteResult = await Movie.destroy({
        where: {
            title: movieName
        }
    });
    return res.json({"message":"Movie deleted succesfully."})
    
}
module.exports = {addMovie,listMovie,searchTitle,updateMovie,deleteMovie};