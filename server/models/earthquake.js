const mongoose = require("mongoose");

const earthquakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The country name is required"]
  },
  titel: "",
  mag: "",
  coordinates: [],
  tsunami: boolean,
  id: ""
});

const Earthquake = mongoose.model("Earthquake", earthquakeSchema);

module.exports = Earthquake;
