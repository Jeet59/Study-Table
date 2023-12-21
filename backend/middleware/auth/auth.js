const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized smh no token! imagine having npo toke lol",
    });
  }
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token);
    req.userId = verify.id;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized smh just login chief" });
  }
};

module.exports = auth;
