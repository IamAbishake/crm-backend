import express from "express";
import {createproduct, deleteProduct, getAllproduct, getOneproduct, updateproduct } from "../controller/productcontroller.js";


const route1 = express.Router();
route1.post("/createproduct",createproduct);
route1.get("/getallproduct", getAllproduct);
route1.get("/getoneproduct/:id", getOneproduct);
route1.put("/updateproduct/:id", updateproduct);
route1.delete("/deleteproduct/:id", deleteProduct);




export default route1;



