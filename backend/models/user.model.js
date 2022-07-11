const mongoose = require ('mongoose');

//most of this code will be similar for majority of mongodb applications
const Schema =mongoose.Schema;

const userSchema = new Schema({
    //single field with parameters
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },   
},{
    //adds time stamps
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;