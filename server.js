const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
 
const  app = express();
dotenv.config()

const corsOptions = {
  origin : "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=> {
  res.json({message: "Jwt auth in nodeJs"});
})

mongoose.connect(process.env.MONGO_URL)
.then(app.listen(process.env.PORT ,()=>{
  console.log("Listening")
}));