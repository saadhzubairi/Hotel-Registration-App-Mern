import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true });
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error);
    }
}
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted!");
    } catch (error) {
        next(error);
    }

}
export const getHotel = async (req, res, next) => {
    try {
        const fHotel = await Hotel.findById(req.params.id);
        res.status(200).json(fHotel);
    } catch (error) {
        next(error);
    }
}
export const getAllHotels = async (req, res, next) => {
    
    const {min,max,...others} = req.query;
    
    try {
        const fHotels = await Hotel.find(
            {...others, CheapestPrice: {$gt: min || 1, $lt: max || 9999}}
            ).limit(req.query.limit);
        res.status(200).json(fHotels);
    } catch (error) {
        next(error);
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))
        const fHotels = await Hotel.find();
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
}

export const countByType = async (req, res, next) => {

    try {
        const hotelC = await Hotel.countDocuments({ type: "Hotel" })
        const AptC = await Hotel.countDocuments({ type: "Apartment" })
        const cabinC = await Hotel.countDocuments({ type: "Cabin" })
        const resC = await Hotel.countDocuments({ type: "Resort" })
        const villaC = await Hotel.countDocuments({ type: "Villa" })

        res.status(200).json(
            [
            { type: "Hotel", count: hotelC },
            { type: "Apartment", count: AptC },
            { type: "Cabin", count: cabinC },
            { type: "Resort", count: resC },
            { type: "Villa", count: villaC },
        ]
        );
    } catch (error) {
        next(error);
    }
}