import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
    const hotelid = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $push: {
                    rooms: savedRoom._id
                }
            })
        } catch (error) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

export const updateRoom = async (req,res,next) =>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new:true});
        res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
}
export const deleteRoom = async (req,res,next) =>{
    const hotelid = req.params.hotelid

    try {
        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $pull: {
                    rooms: req.params.id
                }
            })
        } catch (error) {
            next(err)
        }
        res.status(200).json("Room has been deleted!")
    } catch (error) {
        next(error)
    }

}
export const getRoom = async (req,res,next) =>{
    try {
        const fRoom = await Room.findById(req.params.id);
        res.status(200).json(fRoom);
    } catch (error) {
        next(error);
    }
}
export const getAllRooms = async (req,res,next) =>{
    try {
        const fRooms = await Room.find();
        res.status(200).json(fRooms);
    } catch (error) {
        next(error);
    }
}