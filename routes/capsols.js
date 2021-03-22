const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Capsol = require("../models/Capsol");
const Entry = require("../models/Entry");

// get all capsols
router.get('/', async (req, res) => {
  let capsols = await Capsol.find({});
  res.send(capsols);
});

// get a single capsol by capsol-id
router.get('/:capsolId', async (req, res) => {
  try {
    let capsol = await Capsol.findById(new mongoose.Types.ObjectId(req.params.capsolId)); 
    res.send(capsol);
  } catch (error) {
    res.sendStatus(404);
  }
});

// get all entries of a capsol by capsol-id
router.get('/:capsolId/entries', async (req, res) => {
  let capsolData = await Capsol.findById(new mongoose.Types.ObjectId(req.params.capsolId));
  let entryIds = capsolData.entries.map((value) => {
    return (new mongoose.Types.ObjectId(value));
  });

  let entries = await Entry.find({
    '_id': { $in: entryIds }
  });

  res.send(entries);
});

module.exports = router;

