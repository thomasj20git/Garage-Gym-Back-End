const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {type: Date, required: true},
    exercises: {type: String, required: true},
    notes: {type: String, required: true}
}, {timestamps: true})

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;