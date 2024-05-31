const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const accessTokenSigningKey = process.env.ACCESS_TOKEN_SIGNING_KEY;
const refreshTokenSigningKey = process.env.REFRESH_TOKEN_SIGNING_KEY;

const createUser = async (req, res, next) => {
  const { name, password, email } = req.body;
  console.log(req.body);

  try {
    if (!name || !password || !email) {
      return res
        .status(400)
        .json({ message: "name,password and email fields are required" });
    }
    const [user] = await User.find({ $or: [{ name: name }, { email: email }] });
    if (user) {
      return res.status(409).json({
        message: `${
          user.name === name
            ? "user with this name already exists"
            : "user with this email already exists"
        }`,
      });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name: name,
      password: hashedPassword,
      email: email,
      refreshToken: "",
    });
    await newUser.save();

    res.status(201).json({ message: "user created" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Unable to create user");
  }
};

const authenticateUser = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: "name and password required" });
  }

  try {
    const [user] = await User.find({ name: name });
    if (!user) {
      return res.status(401).json({ message: "User doesnt exist" });
    }
    const verifyPassword = await bcrypt.compare(password, user.password);

    if (verifyPassword) {
      const accessToken = jwt.sign({ name: user.name }, accessTokenSigningKey, {
        expiresIn: "2m",
      });

      const refreshToken = jwt.sign(
        { name: user.name },
        refreshTokenSigningKey,
        {
          expiresIn: "2m",
        }
      );
      user.refreshToken = refreshToken;
      await user.save();
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 2 * 60 * 1000,
      });

      res.status(200).json({ accessToken });
    } else {
      res.status(403).json({ message: "User authentication failed" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unable to authenticate user" });
  }
};

const logout = async (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies.jwt) {
    res.status(204);
  }
  const refreshToken = cookies.jwt;
  const [user] = await User.find({ refreshToken: refreshToken });
  console.log(user);
  if (!user) {
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(403);
  }
  user.refreshToken = "";
  await user.save();
  res.clearCookie("jwt", { httpOnly: true });
  res.status(200).json({ message: "user logged out " });
};

const refresh = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies.jwt) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const refreshToken = cookies.jwt;

  const [user] = await User.find({ refreshToken: refreshToken });

  await jwt.verify(
    refreshToken,
    refreshTokenSigningKey,
    async (err, decoded) => {
      if (err || user.name !== decoded.name) {
        return res
          .status(403)
          .json({ message: "Forbidden/invalid refresh token" });
      } else {
        const newAccessToken = await jwt.sign(
          { name: decoded.name },
          accessTokenSigningKey,
          { expiresIn: "2m" }
        );

        res.status(201).json({ accessToken: newAccessToken });
      }
    }
  );
};

module.exports = {
  createUser,
  authenticateUser,
  logout,
  refresh,
};
