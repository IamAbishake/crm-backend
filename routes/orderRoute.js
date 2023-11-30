import express from "express";
import { createorder, deleteOrder, getAllorder, getOneorder, updateorder } from "../controller/ordercontroller.js";


const route2= express.Router();
route2.post("/createorder", createorder);
route2.get("/getallorder", getAllorder);
route2.get("/getOneorder/:id", getOneorder)
route2.put("/updateorder/:id", updateorder);
route2.delete("/deleteorder/:id",deleteOrder);



export default route2;
