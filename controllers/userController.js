const express = require("express");
const User = require("../models/user");
const router = express();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

router.get("/", async (req, res)=>{
    try{
        const user = await User.find();
        res.send({
            success: true,
            data: user
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })
    }
})
router.post("/register", async (req, res)=>{
    try{
        const newUser = await User.create(
            req.body
            // name: req.body.name,
            // email: req.body.email,
            // password: req.body.password
        );
        console.log(req.body)
        res.send({
            success:true,
            data: newUser
        })
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })

    }
})
router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if(user){
            const token = jwt.sign({
                name: user.name,
                email: user.email,

            }, 'Secret123')
           return res.send({status: "ok", user: token})
        }else{
           return  res.send({status: "error", user: false})
    }
    }catch(err){
        res.send({
            success: false,
            data: err.message
        })

    }
})
// router.get("/:id", async (req, res)=>{
//     try{
//         const user = await User.findById(req.params.id);
//         if(!item){
//             throw new Error("No item by that id here")
//         }
//         res.send({
//             success: true,
//             data: user
//         })
//     }catch(err){
//         console.log(err)
//         res.send({
//             success: false,
//             data: err.message
//         })

//     }
// })
// router.delete("/:id", async (req, res)=>{
//     try{
//         const user = await User.findByIdAndDelete(req.params.id);
//         res.send({
//             success: true,
//             data: user
//         })
//     }catch(err){
//         res.send({
//             success: false,
//             data: err.message
//         })

//     }
// })
// router.put("/:id", async (req, res)=>{
//     try{
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true });
//         res.send({
//             success: true,
//             data: user
//         })
//     }catch(err){
//         res.send({
//             success: false,
//             data: err.message
//         })

//     }
// })

module.exports = router;