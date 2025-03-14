/*const mongoose=require('mongoose')


const UsersSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    }
})



const Users=mongoose.model("Users",UsersSchema)

module.exports=Users;*/

const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone: {
        type: Number,
        required: true,
        unique:true
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        required:true
    },
    password: {
        type: String,
        required: true,
        // unique:true
    },
    address: {
        type: String,
        required: false
    }
})

const Users = mongoose.model("Users", UsersSchema)

module.exports = Users


