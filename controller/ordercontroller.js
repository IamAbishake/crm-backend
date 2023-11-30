import Order from "../model/ordermodel.js";

export const createorder = async(req,res)=>{
    try {
        const orderData = new Order(req.body);
        if(!orderData){
            return res.status(404).json({msg: "Order data not found"});
        }    
        const savedData= await orderData.save();
        res.status(200).json({msg: "Order created successfully"})    
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const getAllorder = async(req,res)=>{
    try {
        const orderData = await Order.find();
        if(!orderData){
            return res.status(404).json({msg:"Order data not found"});
        }
        res.status(200).json(orderData);
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}

export const getOneorder = async(req,res)=>{
    try {
        const id =req.params.id;
        const OrderExist = await Order.findById(id);
        if(!OrderExist){
            return res.status(404).json({msg:"Order data not found"});
        }
        res.status(200).json(OrderExist)
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}

export const updateorder = async(req,res)=>{
    try {
        const id =req.params.id;
        const OrderExist = await Order.findById(id);
        if(!OrderExist){
            return res.status(404).json({msg:"Order not found"});
        }
       const updatedData = await Order.findByIdAndUpdate(id, req.body, {new:true});
       res.status(200).json({msg:"Order updated successfully"});
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}

export const deleteOrder = async(req,res)=>{
    try {
        const id =req.params.id;
        const OrderExist = await Order.findById(id);
        if(!OrderExist){
            return res.status(404).json({msg:"Order not exist"});
        }
       const updatedData = await Order.findByIdAndDelete(id);
       res.status(200).json({msg:"Order deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}