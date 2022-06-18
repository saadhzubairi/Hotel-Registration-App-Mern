import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room_c.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom)
//update
router.put("/:id", verifyAdmin, updateRoom)
//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)
//get
router.get("/:id", getRoom)
//getall
router.get("/", getAllRooms)

export default router

