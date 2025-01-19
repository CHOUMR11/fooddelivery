import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chammaroussama:1996Oussama@cluster0.oknse.mongodb.net//food-delivery').then(()=>console.log("DB Connected"));
}