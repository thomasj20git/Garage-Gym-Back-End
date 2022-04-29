const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    password: {type: String, required: true},
    email: {type: String, required: true,}
    
},
{timestamps: true},
{collection: 'user-data'}
)

const User = mongoose.model('User', userSchema);

module.exports = User;