const express = require('express');
const router = express.Router();


router.get("/personal" , (req,res)=> {
    res.send("User personal Info");
})





module.exports = router

