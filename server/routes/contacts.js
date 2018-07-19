var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const jwt = require("jwt-simple");
const config = require("../configs/index");

const passport = require("passport");
const Contact = require("../models/contact.js");
const User = require("../models/user.js");

/* GET Contact listing. */
router.get(
  "/",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let userId = req.user.id;

    User.findById(userId)
      .populate("_contacts")
      .then(contactsList => {
        console.log("contacts  ", contactsList._contacts);
        res.json(contactsList._contacts);
      })
      .catch(error => next(error));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let userId = req.user.id;
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    });

    newContact
      .save()
      .then(newContact => {
        User.findByIdAndUpdate(
          userId,
          {
            $push: { _contacts: newContact._id }
          },
          { new: true }
        ).then(newUser => {
          res.json({
            message: "New Contact created!",
            id: newContact._id,
            newContact
          });
        });
      })
      .catch(error => next(error));
  }
);

/* GET a single Contact. */
router.get("/:id", (req, res, next) => {
  console.log("enter find id");
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Contact.findById(req.params.id)
    .then(myContact => {
      res.json(myContact);
    })
    .catch(error => next(error));
});

/* DELETE a Contact. */
router.delete("/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.findByIdAndRemove({ _id: id })
    .then(message => {
      console.log("enter delete id 5555");
      return res.json({
        message: "Contact has been removed!"
      });
    })
    .catch(error => next(error));
});

/* GET a Contact for help. */
router.get("/get-help/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.findById({ _id: id })
    .then(message => {
      console.log("found id 5555");
      return res.json({
        message: "found!"
      });
    })
    .catch(error => next(error));
});

/* EDIT . */
router.put("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  const updates = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  Contact.findByIdAndUpdate(req.params.id, updates)
    .then(contact => {
      res.json({
        message: "Contact updated successfully"
      });
    })
    .catch(error => next(error));
});

module.exports = router;
