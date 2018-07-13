var express = require("express");
const Contact = require("../models/contact");

var router = express.Router();

// Route to get all contacts
router.get("/", (req, res, next) => {
  Contact.find()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => next(err));
});

//api.postCountries(data)
// .then(result => {
//this.props.history.push("/countries") => redirected to page countries after
// .this.setState({
//     name:""
// })
// })

// Route to add a contact
router.post("/", (req, res, next) => {
  let { name, capitals, area, description } = req.body;
  Countact.create({ name, email, phone })
    .then(country => {
      res.json({
        success: true,
        contact
      });
    })
    .catch(err => next(err));
});

module.exports = router;
