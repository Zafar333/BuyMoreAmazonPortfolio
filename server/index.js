
const express=require("express")
const cors = require('cors');
// routes is start from here
const sendMail=require("./controller/sendMail")
const app=express()
let Port=4000

app.use(cors());
app.use(express.json());


// routes is start from here

app.post("/sendMail",sendMail)
// routes is end here


app.listen(4000,()=>{console.log("server is live port 4000")})
