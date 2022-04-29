const mongoose = require("mongoose");
const Schema = mongoose.Schema

const gymPostSchema = new Schema({
    // user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }, 
    gymName: {type:String},
    gymEquipment: [{type:String}],
    gymImage: {type: String},
    description: {type: String}

}, {timestamps: true})

const Gym = mongoose.model("gym", gymPostSchema)

module.exports = Gym