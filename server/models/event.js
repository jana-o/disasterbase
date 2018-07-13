const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  place: {
    type: String,
    required: [true, "The name is required"]
  },
  mag: "",
  location: { type: { type: String }, coordinates: [Number] },
  tsunami: Boolean,
  eventType: { type: String, enum: ["earthquake", "vulcano"] },
  apiId: ""
});

eventSchema.index({ location: "2dsphere" });
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
