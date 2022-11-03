const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJwt = (mail) =>
  jwt.sign(
    {
      mail,
    },
    process.env.JWT_SECRET
  );

module.exports = { generateJwt };
