const express = require("express");
const router = express.Router();
const register = require("../middleware/auth/register");
const login = require("../middleware/auth/login");
const get = async (req, res) => {
  res.send("Registeration server is up");
};

router.route("/register").post(register).get(get);
router.route("/").get(async (req, res) => {
  res.send("Server is upp");
});
router
  .route("/login")
  .post(login)
  .get(async (req, res) => {
    res.send("Login server is up");
  });

module.exports = router;
