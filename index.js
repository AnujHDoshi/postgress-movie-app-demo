const express = require("express");
const bodyParser = require("body-parser")

const moviesRouters = require("./Route/movieRouter.js")

const app = express();
app.use(bodyParser.json());
app.get("/",(req,res)=>{
  res.json({message:"Server starting..."})
});

app.use("/movie", moviesRouters);

app.listen(3000);