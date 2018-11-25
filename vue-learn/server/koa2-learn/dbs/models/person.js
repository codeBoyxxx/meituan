const mongoose = require('mongoose')
//创建集合
const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})


//将集合与模型关联上
module.exports =  mongoose.model('person',personSchema)