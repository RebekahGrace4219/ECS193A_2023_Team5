const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(function (data) {
      res.send({ data });
    })
    .catch(function (err) {
      res.status(400).json("Error from the router" + err);
    });
});

router.route("/create_user").post((req, res) => {
  const req_name = req.body.name;
  const req_email = req.body.email;

  // console.log(req.body)

  const newUser = new User({
    name: req_name,
    email: req_email
  });

  newUser
    .save()
    .then(() => res.json("new User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;