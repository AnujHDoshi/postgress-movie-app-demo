const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres'
})

const Movie = sequelize.define('movies', {
  movieId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true
  },
  title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    year: {
        type: DataTypes.INTEGER
    },
    length: {
        type:DataTypes.STRING
    },
    actor:{
        type:DataTypes.STRING
    }
}, {
    freezeTableName: true,
    underscored: true,
    timestamps:false
});

module.exports = Movie;