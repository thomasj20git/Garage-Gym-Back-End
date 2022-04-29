const express = require("express");
const Workout = require("../models/workout");
const router = express();

router.get("/", async (req, res)=>{
    try{
        const workout = await Workout.find();
        res.send({
            success: true,
            data: workout
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
        const newWorkout = await Workout.create(req.body);
        res.send({
            success:true,
            data: newWorkout
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
        const workout = await Workout.findById(req.params.id);
        if(!workout){
            throw new Error("No item by that id here")
        }
        res.send({
            success: true,
            data: workout
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
        const workout = await Workout.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            data: workout
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
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {new: true });
        res.send({
            success: true,
            data: workout
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })

    }
})
module.exports = router;