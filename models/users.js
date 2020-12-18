const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    ad:String,
    soyad:String,
    no:Number
});

const users = mongoose.model('user',userSchema);

module.exports = users;