const lodash = require("lodash");
const moment = require("moment");
const {Movie} = require('../Model')
const addMovie = async(req,res)=>{
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

module.exports = {addMovie};