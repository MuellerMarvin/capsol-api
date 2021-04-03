const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { geoSearch } = require('../models/Capsol');

const Capsol = require("../models/Capsol");
const Entry = require("../models/Entry");
const User = require("../models/User");

//#region GET
// get all capsols
router.get('/', async (req, res) => {
  let capsols = await Capsol.find({});
  res.send(capsols);
});

// get all capsols around a certain position
router.get('/around', async (req, res) => {
  let location;
  let distance;
  try {
    location = {
      type: 'Point',
      coordinates: [parseFloat(req.query.lon), parseFloat(req.query.lat)]
    };
    distance = parseFloat(req.query.radius);
  } catch (error) {
    res.sendStatus(422);
  }

  let capsols = await Capsol.find().where('location').near({
    center: location,
    geometry: location,
    minDistance: 0,
    maxDistance: distance
  });

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
//#endregion

//#region POST
router.post('/', async (req, res) => {
  // create capsol object from request
  let capsol = req.body.capsol;

  // Check if the user exists
  try {
    await User.findById(new mongoose.Types.ObjectId(capsol.author)).countDocuments((err, count) => {
      if(count < 1) {
        res.sendStatus(405);
        return;
      }
    });
  }
  catch(e) {
    res.sendStatus(500);
    return;
  }

  // try and put it into the database
  try {
    await Capsol.create(capsol);
  }
  catch {
    res.sendStatus(400);
    return;
  }
  res.sendStatus(200);
});

//#endregion

module.exports = router;

