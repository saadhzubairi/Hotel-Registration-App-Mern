import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel_c.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel)
//update
router.put("/:id", verifyAdmin, updateHotel)
//delete
router.delete("/:id", verifyAdmin, deleteHotel)
//get
router.get("/find/:id", getHotel)
//getall
router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

export default router