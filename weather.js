const mongoose = require('mongoose');

const weatherSchema=new mongoose.Schema({
    State:String,
    Country:String
    
})
module.exports = mongoose.model("weather",weatherSchema);