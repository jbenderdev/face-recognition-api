//loading Express
const express = require("express");
//loading body parser (required for sending json)
const bodyParser = require("body-parser");
//loading bcrypt
const bcrypt = require("bcrypt-nodejs");
//loading cors
const cors = require("cors");
//loading knex
const knex = require("knex");
//loading register
const register = require("./controllers/register");
//loading signin
const signin = require("./controllers/signin");
//loading profile
const profile = require("./controllers/profile");
//loading image
const image = require("./controllers/image");


const db = knex({
    client: "pg",
    connection: {
        host : "127.0.0.1",
        user : "johnbender",
        password : "",
        database : "smart-brain"
    }
})

//knex test
db.select('*').from('users').then(data => {
    
});

//assigning Express
const app = express();

//activating body parser
app.use(bodyParser.json());

//activating cors
app.use(cors());

//testing homepage connection
app.get("/", (req, res) => {
    res.send(database.users)
})

//user login flow
app.post("/signin", (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

//user registration flow

app.post("/register", (req, res) => { register.handleRegister(req, res, db, bcrypt)})

//returning user profile

app.get("/profile/:id", (req, res) => {profile.handleProfileGet(req, res, db)})

//tracking total user image submissions

app.put("/image", (req, res) => {image.handleImage(req, res, db)})
app.post("/imageurl", (req, res) => {image.handleApiCall(req, res)})

//assigning port
app.listen(3000, () => {
    console.log("app is running on port 3000");
})