import mongoose from "mongoose"
const userSchema = mongoose.Schema({
    cedula:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})

export const User = mongoose.model('User', userSchema)