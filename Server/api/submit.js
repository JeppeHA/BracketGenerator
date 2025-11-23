const express = require("express");

const router = express.Router();

let processedArray = []

router.post("/", async (req, res) => {
    try{
        const data = await req.body.userInput
        console.log("Text");
        console.log(data.text);
        processedArray = data.text.split(",").map(item => item.trim());
        res.json({ message: "Data processed" });
        
        
    } catch (error){
        console.log(error);
    }
});

router.get("/", (req, res) => {
    res.json(processedArray);
});



module.exports = router


