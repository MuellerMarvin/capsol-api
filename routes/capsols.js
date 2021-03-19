const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Capsol = require("../models/Capsol");

router.get('/:capsolId/', async (req, res) => {
  try {
    let capsolData = await Capsol.findById(new mongoose.Types.ObjectId(req.params.capsolId)); 
    res.send(capsolData);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

