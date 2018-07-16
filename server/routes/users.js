const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const config = require("../configs/index");

const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

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

router.post("/get-help/:id", (req, res, next) => {
  let userId = req.params.id;
  let transporter = nodemailer.createTransport({
    service: "Gmail"
  });
  transporter.sendMail({
    from: '"Disasterbase" <info@disasterbase.com>',
    to: email,
    subject: subject,
    text: message,
    html: `<b>${message}</b>`
  });
  // .then => {res.json()}
});

module.exports = router;
