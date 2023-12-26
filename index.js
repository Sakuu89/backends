const express  = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const noticeRoutes = require("./routes/noticeRoutes")

require("dotenv").config();


const app = express();
app.use(express.json());


mongoose.connect(`${process.env.MONGOOSE_URL}test`);
app.get("/",(req,res)=>{
    res.send("APi is running")
})
app.use('/auth',authRoutes);
app.use("/notice",noticeRoutes);

app.listen(8000,()=>{
    console.log(`Server is running on 8000`);
})

