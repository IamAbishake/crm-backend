import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    product:{
        type: String,
        required: true
    },
    category:{
        type:  String,
        required: true
    },
    price:{
        type:  String,
        required: true
    },
    stock  :{
        type:  String,
        required: true
    }
}) 

export default mongoose.model("Product", ProductSchema)