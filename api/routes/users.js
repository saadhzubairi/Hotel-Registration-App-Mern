import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user_c.js";
import { verifyToken } from "./utils/verifyToken.js";

const router = express.Router();

//auth
router.get("/checkauth",verifyToken, (req,res,next)=>{
    res.send("Hello, you are logged in!");
});
//update
router.put("/:id", updateUser);
//delete
router.delete("/:id", deleteUser);
//get
router.get("/:id", getUser);
//getall
router.get("/", getAllUsers);


export default router