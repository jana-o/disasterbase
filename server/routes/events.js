const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const axios = require("axios");
var mongoose = require("mongoose");

// todo make UPDATE BUTTON for earthquake
const earthquakeService = axios.create({
  baseURL: `https://earthquake.usgs.gov/fdsnws/event/1/`
});

function sanitizeData(data) {
  let earthquakes = [];

  for (var i in data.features) {
    let quake = {
      mag: data.features[i].properties.mag,
      place: data.features[i].properties.place,
      coords: {
        type: "Point",
        coordinates: [
          data.features[i].geometry.coordinates[0],
          data.features[i].geometry.coordinates[1]
        ]
      },
      code: data.features[i].properties.code,
      date: new Date(data.features[i].properties.time)
    };
    earthquakes.push(quake);
  }
  return earthquakes;
}

// router.get("/", (req, res, next) => {
//   Event.create()
//     .then(data => res.json(data))
//     .catch(err => next(err));
// });

// Route to get all API
router.get("/update", (req, res, next) => {
  var starttime = req.query.starttime;
  var endtime = req.query.endtime;
  earthquakeService
    .get(`query?format=geojson&starttime=${starttime}&endtime=${endtime}`)
    .then(json => {
      Event.deleteMany({
        $and: [
          { date: { $gt: new Date(starttime) } },
          { date: { $lt: new Date(endtime) } }
        ]
      })
        .then(() => Event.create(sanitizeData(json.data)))
        .then(events => res.json(events));
    })
    .catch(err => next(err));
  // //res.json(data);
  // console.log("Test");
});

//insertmany

// Route to get all from DB
router.get("/", (req, res, next) => {
  Event.find()
    .then(data => res.json(data))
    .catch(err => next(err));
});

module.exports = router;
