import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer:{
        type: String,
        required: true
    },
    orderno:{
        type:  String,
        required: true
    },
    quantity:{
        type:  String,
        required: true
    },
    amount:{
        type:  String,
        required: true
    }
}) 

export default mongoose.model("Order",OrderSchema)