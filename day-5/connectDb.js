import mongoose from "mongoose";
async function connectDB() {
    const connectionString = "mongodb+srv://manjila:manjila9@cluster0.4dggrvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0your_mongoDB_string"
        .catch(() => {
            console.log("error while connecting to databse.")
        })
}
export default connectDB;