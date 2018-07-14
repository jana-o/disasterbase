const mongoose = require("mongoose");
const Contact = require("../models/contact");

const dbName = "disasterbase";
mongoose.connect("mongodb://localhost/disasterbase");
// mongoose.connect(process.env.MONGODB_URI);
Contact.collection.drop();

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

Contact.create(contacts, err => {
  if (err) {
    throw err;
  }

  mongoose.connection.close();
});
