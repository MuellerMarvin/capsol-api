const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Capsol = require("../models/Capsol");

router.get('/:capsolId/', async (req, res) => {
  try {
    let capsol = await Capsol.findById(new mongoose.Types.ObjectId(req.params.capsolId)); 
    res.send(capsol);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

