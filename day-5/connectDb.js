// connectionDb.js
import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://Manjila:manjila9@cluster0.xn6mwh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
    }
}

export default connectDB;
