const jwt = require("jsonwebtoken");
const user = require("../../models/user");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const cUser = await user.findOne({ username });
    if (!cUser) {
      console.log("No user found");
    } else if (cUser.password === password) {
      const token = jwt.sign({ id: cUser._id }, process.env.JWT_SECRET);
      res
        .cookie("token", token, {
          maxAge: 604800000,
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .status(200)
        .json({ userId: cUser._id });
    } else {
      res.status(401);
    }
  } catch (err) {
    res.status(400);
    console.log("error cant login");
  }
};

module.exports = login;
