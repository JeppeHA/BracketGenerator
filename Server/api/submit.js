const express = require("express");

const router = express.Router();

let processedArray = []

router.post("/", async (req, res) => {
    try{
        const data = await req.body.userInput
        processedArray = data.text.split("\n").map(item => item.trim());
        console.log(processedArray);
        res.json({ message: "Data processed" });
        
        
    } catch (error){
        console.log(error);
    }
});

router.get("/", (req, res) => {
    res.json(processedArray);
});



module.exports = router


