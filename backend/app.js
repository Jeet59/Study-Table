const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authrouter = require("./routes/authroutes.js");
const authcheck = require("./middleware/auth/auth.js");
const approuter = require("./routes/approutes.js");

app.use(
  cors({
    credentials: true,
    origin: "https://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(process.env.PORT, () => {
  console.log("Server is up");
});
app.use("/", approuter);
app.use("/home", authcheck, approuter);
app.use("/", authrouter);
