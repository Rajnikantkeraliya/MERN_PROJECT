import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected successfully");
        }).catch((err) => {
            console.error("MongoDB connection failed:", err.message);
        });
};
