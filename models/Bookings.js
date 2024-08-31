import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    ticket: {
        type: Number,
        required: true
    },
    createdAt: {
        type:Date,
        default:Date.now
    }
}); 

const Bookings = mongoose.model('Booking', bookingSchema);

export default Bookings;