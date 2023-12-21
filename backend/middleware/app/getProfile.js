const User = require("../../models/user");

const getprofile = async (req, res) => {
  try {
    const Id = req.userId;
    const user = await User.findById(Id)
      .select("username college course year interests")
      .lean()
      .exec();
    console.log(user);
    res.json({ user }).status(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getprofile;
