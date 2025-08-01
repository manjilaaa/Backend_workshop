import express from "express";

const server = express();
server.use(express.json());
server.get("/",(req,res) => {
        res.send("Request was arrived");
        
        
})
server.get("/post",(req,res) => {
    res.json({
        name:"Manjila",
        course: "Backend"
    })
})
server.post("/login", (req,res) => {
    const {username,password
    } = req.body;
    res.json({
        message:"Request received",
        user:{
            
                username,password 
        }

    })
})
server.listen(3000,() => {
    console.log("server is running on port 3000");
})
