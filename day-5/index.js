import express from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
const app = express()
app.use(express.json())
const jwtSecret = "1234"
app.post("/login" ,(req,res) => {
    const data = req.body;
    const {username, password} = req.body
    ;
    const token = jwt.sign(data, jwtSecret);
    res.json({
        token 

    })
})
app.get("/profile", (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token, jwtSecret)
    if (!decoded) {
        res.send("invalid token");
        return;
    }
    res.json({
        user: decoded
    })
})
app.post("/saveUser", async (req, res) => {
    const { name, email, phone } = req.body;
    const newUser = new User({
        name,
        email,
        phone
    })
    if (!newUser) {
        res.send("Cannot save the user");
        return;

    }
    await newUser.save();
    console.log("user saved ")
    res.json({
        message: "user saved",
        user: newUser
    })

})
app.listen(3000, () => {
    console.log("Server is running onport 3000")
})