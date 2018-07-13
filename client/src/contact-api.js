var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Contact = require("../models/contact");

/* GET Contact listing. */
router.get("/contacts", (req, res, next) => {
  Contact.find()
    .then(contactsList => {
      res.json(contactsList);
    })
    .catch(error => next(error));
});

router.post("/contacts", (req, res, next) => {
  const myContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });

  myContact
    .save()
    .then(myContact => {
      res.json({
        message: "New Contact created!"
      });
    })
    .catch(error => next(error));
});

/* GET a single Contact. */
// router.get("/contacts/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   Contact.findById(req.params.id)
//     .then(myContact => {
//       res.json(myContact);
//     })
//     .catch(error => next(error));
// });

/* EDIT a Contact. */
// router.put("/contacts/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: "Specified id is not valid" });
//     return;
//   }

//   const updates = {
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone
//   };

//   Contact.findByIdAndUpdate(req.params.id, updates)
//     .then(phone => {
//       res.json({
//         message: "Contact updated successfully"
//       });
//     })
//     .catch(error => next(error));
// });

/* DELETE a Contact. */
router.delete("/contacts/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Contact.remove({ _id: req.params.id })
    .then(message => {
      return res.json({
        message: "Contact has been removed!"
      });
    })
    .catch(error => next(error));
});

module.exports = router;
