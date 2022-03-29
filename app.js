require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
// const itemController = require("./controllers/itemcontroller")


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

// app.use("/items", itemController)


//both want to occupy 3000 set to 3001
app.listen(3001, ()=> (
    console.log("app is running")
))