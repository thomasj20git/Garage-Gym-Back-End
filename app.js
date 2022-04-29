require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const jwt = require("jsonwebtoken")
const app = express();
const gymController = require("./controllers/gymController")
const userController = require("./controllers/userController")
const workoutController = require("./controllers/workoutController")



const mongoURI = process.env.MONGODB_URI


// mongoose.connect(process.env.MONGO_URI);
// Connection Error/Success
const db = mongoose.connection;
mongoose.connect(process.env.MONGODB_URI);
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", process.env.MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

app.use(morgan("short"))
app.use(cors())
app.use(urlencoded({extended:true}));
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use("/gym", gymController)
app.use("/user", userController)
app.use("/workout", workoutController)



//both want to occupy 3000 set to 3001
const port = process.env.PORT || 3001
app.listen(port, ()=> (
    console.log("app is running")
))