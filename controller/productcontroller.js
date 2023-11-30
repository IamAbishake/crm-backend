import Product from "../model/productmodel.js";

export const createproduct = async(req,res)=>{
    try {
        const productData = new Product(req.body);
        if(!productData){
            return res.status(404).json({msg: "product data not found"});
        }    
        const savedData= await productData.save();
        res.status(200).json({msg: "product created successfully"})    
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const getAllproduct = async(req,res)=>{
    try {
        const productData = await Product.find();
        if(!productData){
            return res.status(404).json({msg:"Product data not found"});
        }
        res.status(200).json(productData);
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}

export const getOneproduct = async(req,res)=>{
    try {
        const id =req.params.id;
        const ProductExist = await Product.findById(id);
        if(!ProductExist){
            return res.status(404).json({msg:"Product not found"});
        }
        res.status(200).json(ProductExist)
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}

export const updateproduct = async(req,res)=>{
    try {
        const id =req.params.id;
        const ProductExist = await Product.findById(id);
        if(!ProductExist){
            return res.status(404).json({msg:"Product not found"});
        }
       const updatedData = await Product.findByIdAndUpdate(id, req.body, {new:true});
       res.status(200).json({msg:"Product updated successfully"});
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const id =req.params.id;
        const ProductExist = await Product.findById(id);
        if(!ProductExist){
            return res.status(404).json({msg:"Product not exist"});
        }
       const updatedData = await Product.findByIdAndDelete(id);
       res.status(200).json({msg:"product deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error});
        
    }
}