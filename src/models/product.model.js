import mongoose from "mongoose"
const productShema = mongoose.Schema({
    codigo:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        require:true
    },
    precio:{
        type:Number,
        required:true
    },
    imagen:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storage',
        required: false
    },
})

export const Product = mongoose.model('Product', productShema)