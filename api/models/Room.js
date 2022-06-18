import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    maxPeople: {
        type: Number,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
}, { timestamps: true });

export default mongoose.model("Room", UserSchema);

