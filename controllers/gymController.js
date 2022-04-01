const express = require("express");
const Gym = require("../models/gymmodel");
const router = express();

router.get("/", async (req, res)=>{
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
