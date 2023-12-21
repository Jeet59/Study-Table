const user = require("../../models/user");

const putprofile = async (req, res) => {
  try {
    const Id = req.userId;
    const { username, college, course, year, interests } = req.body;
    const profileupdate = await user.updateOne(
      { _id: Id },
      { username, college, course, year, interests }
    );
    res.status(200).json({ message: "Profile updated" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = putprofile;
