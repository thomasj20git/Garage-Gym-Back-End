const express = require("express");
const Gym = require("../models/gymmodel");
const router = express();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.get("/", async (req, res)=>{
    const token = req.headers['x-access-token']
    // const decoded = jwt.verify(token, 'Secret123')
    // const email = decoded.email
    // const user = await User.findOne({email: email})
    try{
        const gymPictures = await Gym.find();
        res.send({
            success: true,
            data: gymPictures
        })

    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.post("/", async(req, res)=>{
    try{
        const newGymPictures = await Gym.create(req.body);
        res.send({
            success:true,
            data: newGymPictures
        })

    }catch(err){
        res.send({
            success: false,
            data: err.message
        })

    }
})
router.get("/:id", async (req, res)=>{
    try{
        const gymPicture = await Gym.findById(req.params.id);
        if(!item){
            throw new Error("No item by that id here")
        }
        res.send({
            success: true,
            data: gymPicture
        })
    }catch(err){
        console.log(err)
        res.send({
            success: false,
            data: err.message
        })

    }
})
router.delete("/:id", async (req, res)=>{
    try{
        const gymPicture = await Gym.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: gymPicture
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })

    }
})
router.put("/:id", async (req, res)=>{
    try{
        const gymPicture = await Gym.findByIdAndUpdate(req.params.id, req.body, {new: true });
        res.send({
            success: true,
            data: gymPicture
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })

    }
})
module.exports = router;
