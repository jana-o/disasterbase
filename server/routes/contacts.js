var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Contact = require("../models/contact.js");

/* GET Contact listing. */
router.get("/", (req, res, next) => {
  Contact.find()
    .then(contactsList => {
      res.json(contactsList);
    })
    .catch(error => next(error));
});

router.post("/", (req, res, next) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });

  newContact
    .save()
    .then(newContact => {
      res.json({
        message: "New Contact created!",
        id: newContact._id,
        newContact
      });
    })
    .catch(error => next(error));
});

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

// router.delete("/:id", (req, res, next) => {
//   console.log("enter delete id");

//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Contact.remove({ _id: req.params.id })
//     .then(message => {
//       return res.json({
//         message: "Contact has been removed!"
//       });
//     })
//     .catch(error => next(error));
// });

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
