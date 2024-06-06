const jwt = require("jsonwebtoken");
const accessTokenSigningKey = process.env.ACCESS_TOKEN_SIGNING_KEY;

const verifyJwt = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  jwt.verify(token, accessTokenSigningKey, async (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Forbidden/Access token expired" });
    }

    req.user = decoded.name;
    next();
  });
};

module.exports = verifyJwt;
