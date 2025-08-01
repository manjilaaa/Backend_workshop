import express from "express"
import users from './users.js';
const app = express();

app.use(express.json());



app.get ("/user" , (req,res) => {
    const {id} = req.query ;
    const user =  users.find (u => u.id == id);
    if(!user){
        res.status(404).send ("Invalid id");
        return;
    }
    res.status(201).json({
        user
    })

})
app.use ((err,req,res,next) =>{
    res.json({
        message:"error found"

    })
    
} )

app.listen(3000, () => {
    console.log("Server is running onport 3000")
})