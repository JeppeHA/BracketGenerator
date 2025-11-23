const express = require("express");
const cors = require("cors");


const Namelist = require("./api/submit")

const app = express();


app.use(cors());
app.use(express.json());
app.use("/submit", Namelist);


app.get("/", (req, res) => {
    res.send({message: "Hello from backend"});
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});