const express = require("express");
const Profile = require("../models/Profile");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/user/login", async (req, res) => {
  const bodyKeys = Object.keys(req.body);
  if (bodyKeys.length === 0) {
    res.send("empty feild is not allowed");
  }
  const allowed = ["email", "password"];
  const check = bodyKeys.every((val) => allowed.includes(val));
  if (!check) {
    res.send("extra updates are not allowed");
  }
  try {
    const user = await Profile.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
} catch (e) {
    res.status(400).send({error : e.message})
}
});



router.post("/user/signup", async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.send("please send the user info");
    }
    try {
        const user = await new Profile(req.body);
        const token = await user.generateAuthToken();
        res.send({...req.body, token })
        
        console.log("Token is : ", token);
        await user.save();
        // res.send(user, token);
    } catch (e) {
        res.send({ error: e.message });
    }
});

module.exports = router;
