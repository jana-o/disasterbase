const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  // email: String, // Defined with passportLocalMongoose
  // hashed: String, // Defined with passportLocalMongoose
  // salt: String, // Defined with passportLocalMongoose
  name: { type: String, required: [true, "A name is required"] },
  email: String,
  phone: Number
  //_owner: Userid
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = mongoose.model("Contact", contactSchema);
