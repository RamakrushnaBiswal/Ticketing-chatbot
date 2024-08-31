import mongoose from "mongoose";

const dbConn=async()=>{
    await mongoose.connect("mongodb://localhost:27017/ticketChatbot"); 
}

export default dbConn;