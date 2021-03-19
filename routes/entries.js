const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Entry = require("../models/Entry");

router.get('/:entryId/', async (req, res) => {
  try {
    let entryData = await Entry.findById(new mongoose.Types.ObjectId(req.params.entryId)); 
    res.send(entryData);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;

