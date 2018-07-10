const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    stocks: [String] 
});

mongoose.model('users', userSchema);