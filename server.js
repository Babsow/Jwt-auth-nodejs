const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');
const Role = db.role
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
 
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

app.listen(process.env.PORT ,()=>{
  console.log("Listening")});

function initial() {
  Role.create({
      id: 1,
      name: "user"
  });
   
  Role.create({
      id: 2,
      name: "moderator"
    });
   
  Role.create({
      id: 3,
      name: "admin"
    });
}