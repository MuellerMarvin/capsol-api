var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

/* GET users listing. */
router.get('/:userId', async (req, res) => {
    try {
        let user = await User.findById(new mongoose.Types.ObjectId(req.params.userId)); 
        res.send(userData);
    } catch (error) {
        res.sendStatus(404);
    }
});

module.exports = router;

