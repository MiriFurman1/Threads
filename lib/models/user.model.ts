import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    id: {type:String, required:true},
    username: {type:String, required:true, unique:true},
    name: {type:String, required:true},
    image:String,
    bio:String,
    threads:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Thread'
        }
    ],
    onboarded:{
        type:Boolean,
        default: false
    },
    communities:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Community'
        }
    ],
});

//in the first time the schema will be created in the second option
const User=mongoose.models.User || mongoose.model ('User',userSchema)