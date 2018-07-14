const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const axios = require("axios");
var mongoose = require("mongoose");

// todo make helper file for earthquake
const earthquakeService = axios.create({
  baseURL: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-07-01&endtime=2018-07-13`
});

function sanitizeData(data) {
  let earthquakes = [];

  for (var i in data.features) {
    let quake = {
      mag: data.features[i].properties.mag,
      place: data.features[i].properties.place,
      coords: data.features[i].geometry.coordinates
    };
    earthquakes.push(quake);
  }
  return earthquakes;
}
// end todo

//insertmany

// Route to get all users
router.get("/", (req, res, next) => {
  earthquakeService
    .get()
    .then(json => res.json(sanitizeData(json.data)))
    .catch(err => next(err));

  //res.json(data);
  console.log("Test");
});

router.post("/", (req, res, next) => {
  const theEvent = new Event({
    mag: data.features.properties.mag,
    place: data.features.properties.place,
    coords: data.features.geometry.coordinates
  });

  theEvent
    .save()
    .then(theEvent => {
      res.json({
        message: "New Event created!",
        id: theEvent._id
      });
    })
    .catch(error => next(error));
});

module.exports = router;
