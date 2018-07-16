const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const axios = require("axios");
var mongoose = require("mongoose");

// todo make UPDATE BUTTON for earthquake
const earthquakeService = axios.create({
  baseURL: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&`
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
      code: data.features[i].properties.code
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
  var starttime = Date - 14;
  var endtime = Date;

  earthquakeService
    .get(`starttime=2018-07-01&endtime=2018-07-13`)
    .then(json => res.json(sanitizeData(json.data)))
    .catch(err => next(err));
  //res.json(data);
  console.log("Test");
});

//insertmany

// Route to get all from DB
router.get("/", (req, res, next) => {
  Event.find()
    .then(data => res.json(data))
    .catch(err => next(err));
});

module.exports = router;
