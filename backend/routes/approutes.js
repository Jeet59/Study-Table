const express = require("express");
const router = express.Router();
const getprofile = require("../middleware/app/getProfile");
const putprofile = require("../middleware/app/putProfile");

router.route("/").get(async (req, res) => {
  res.send("Home Server is Up");
});
router.route("/profile").get(getprofile).put(putprofile);

module.exports = router;
