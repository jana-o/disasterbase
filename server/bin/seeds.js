const mongoose = require("mongoose");
const Contact = require("../models/contact");
const Event = require("../models/event");

const dbName = "disasterbase";
mongoose.connect("mongodb://localhost/disasterbase");
// mongoose.connect(process.env.MONGODB_URI);
Contact.collection.drop();
Event.collection.drop();

const contacts = [
  {
    name: "Mama",
    email: "mama@home.de",
    phone: "004912345",
    _user: ""
  },
  {
    name: "Dad",
    email: "dad@home.de",
    phone: "004912345",
    _user: ""
  }
];

const events = [
  {
    place: "4km SW of Volcano, Hawaii",
    mag: "2.48",
    coords: { type: "Point", coordinates: [-155.272995, 19.4039993, 0.47] },
    tsunami: 0,
    eventType: "earthquake"
  },
  {
    place: "10km NE of Aguanga, CA",
    mag: "0.4",
    coords: { type: "Point", coordinates: [-116.8005, 33.51, 5.16] },
    tsunami: 0,
    eventType: "earthquake"
  },
  {
    place: "46km SW of Tanaga Volcano, Alaska",
    mag: "1.9",
    coords: { type: "Point", coordinates: [-178.6171, 51.5905, 39.7] },
    tsunami: 0,
    eventType: "earthquake"
  },
  {
    place: "10km NE of Aguanga, CA",
    mag: "0.4",
    coords: { type: "Point", coordinates: [-116.8005, 33.51, 5.16] },
    tsunami: 0,
    eventType: "earthquake"
  },
  {
    place: "5km SSW of Volcano, Hawaii",
    mag: "2.09",
    coords: { type: "Point", coordinates: [-155.2611694, 19.3896675, -0.2] },
    tsunami: 0,
    eventType: "earthquake"
  },
  {
    place: "110km SSW of Idyllwild, CA",
    mag: "0.2",
    coords: { type: "Point", coordinates: [-116.7403333, 33.651, 11.8] },
    tsunami: 0,
    eventType: "earthquake"
  }
];

Contact.create(contacts).then(contacts => {
  Event.create(events).then(events => {
    mongoose.connection.close();
  });
});
