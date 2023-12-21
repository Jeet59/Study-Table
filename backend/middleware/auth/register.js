const user = require("../../models/user");

const register = async (req, res) => {
  try {
    const register = await user.create(req.body);
    res.json({ register }).status(201);
    console.log(req.body);
  } catch (error) {
    console.log("Similar users being created smh");
    res.status(400);
  }
};

module.exports = register;
