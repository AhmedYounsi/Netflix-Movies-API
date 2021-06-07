const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

var routes = require("./routes/route");
app.use(cors());
app.use("/api", routes);

app.get("/",(req,res)=>{
    res.send('APP')
})

app.listen(PORT ,()=>{
    console.log(`Server is running on Port ${PORT}`)
})