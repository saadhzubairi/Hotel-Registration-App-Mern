import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel_c.js";

const router = express.Router();

//create
router.post("/", createHotel)
//update
router.put("/:id", updateHotel)
//delete
router.delete("/:id", deleteHotel)
//get
router.get("/:id", getHotel)
//getall
router.get("/", getAllHotels)

export default router