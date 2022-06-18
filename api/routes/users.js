import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user_c.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* //auth
router.get("/checkauth",verifyToken, (req,res,next)=>{
    res.send("Hello, user! you are logged in!");
});
//auth
router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
    res.send("Hello, you are logged in and you can delete your own account lmao!");
});
router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
    res.send("Hello, you are logged in and you can delete all accounts lmfaaaooooo!");
}); */
//update
router.put("/:id", verifyUser, updateUser);
//delete
router.delete("/:id", verifyUser, deleteUser);
//get
router.get("/:id", verifyUser, getUser);
//getall
router.get("/", verifyAdmin, getAllUsers);


export default router