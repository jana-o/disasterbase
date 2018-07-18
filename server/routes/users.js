const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const config = require("../configs/index");
const jwt = require("jwt-simple");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const nodemailer = require("nodemailer");
const storage = cloudinaryStorage({
  cloudinary,
  folder: "my-images",
  allowedFormats: ["jpg", "png", "gif"]
});

const parser = multer({ storage });

// Route to get all users
router.get("/", (req, res, next) => {
  User.find().then(users => {
    res.json(users);
  });
});

// Route to add a picture on one user with Cloudinary
// To perform the request throw Postman, you need
// - Endpoint: POST http://localhost:3030/api/first-user/users/pictures
// - Select: Body > form-data
// - Put as key: picture (and select "File")
// - Upload your file
// To perform the request in HTML:
//   <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/first-user/pictures">
//     <input type="file" name="picture" />
//     <input type="submit" value="Upload" />
//   </form>

router.post(
  "/pictures",
  [passport.authenticate("jwt", config.jwtSession)],
  parser.single("picture"),
  (req, res, next) => {
    console.log("DEBUG req.file", req.file);
    User.findOneAndUpdate(req.user._id, { pictureUrl: req.file.url }).then(
      () => {
        res.json({
          success: true,
          pictureUrl: req.file.url
        });
      }
    );
  }
);

router.get(
  "/profile",
  [passport.authenticate("jwt", config.jwtSession)],
  (req, res, next) => {
    res.json(req.user);
    // User.find().then(users => {
    //   res.json(users);
    // }); no need because already found see above
  }
);

router.get(
  "/get-help",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let userId = req.user.id;
    User.findById(userId)
      .populate("_contacts")
      .then(user => {
        console.log("contacts ", user._contacts);
        let contacts = user._contacts;
        contacts.forEach(contact => {
          console.log(contact.email);
          let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PW
            }
          });
          transporter
            .sendMail({
              from: '"Disasterbase" <birdyjana@gmail.com>',
              to: contact.email,
              subject: "Info from Disasterbase",
              text: "Hello you have been notified",
              html: `<b>Hello you have been notified</b>`
            })
            .then(info => console.log(info));
        });

        res.json({ contacts });
      })

      .catch(error => next(error));
  }
);

module.exports = router;
