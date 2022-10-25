const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.listen(port, ()=>{
   console.log("Server is running", port);
});