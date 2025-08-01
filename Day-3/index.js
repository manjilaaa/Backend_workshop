import express from "express"
import loginMiddleware from "./loginMiddleware";
const PORT = 3000;
const users = [{
    id: 1,
    username:"manjila",
    password:'password'
},{
    id: 2,
    username:"anjila",
    password:'password1'
},{
    id: 3,
    username:"ayan",
    password:'password2'
}]
const app = express();

app.use(express.json());
app.get('/profile',(req,res) => {
    res.send("Request Received")
    console.log(req.headers);
})
app.get("/user/:id",(req,res) => {
    console.log("reqest received");
    const{id}= req.params;
    console.log(id)
    const user = users.find(user=>user.id==id)
    if(user){
        res.json({
            message:"User found",user
        })
        return;
    }
    res.json({
        message:"user not found",id
    })
   

})




app.post('/login', loginMiddleware, (req,res) => {
    console.log(req.username)
    res.send(req.body.username)
    // const{ username ,password } = req.body;

//     const user = user.find((user) =>
//          user.username === username && user.password === password

//     ) ;
//     if (user) {
//         res.send("login successfull")
//     }
//     else{
//         res.send("failed")
//     }
}

);




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});