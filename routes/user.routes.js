const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/createuser").post(userController.createUser);

router.route("/authenticateuser").post(userController.authenticateUser);

router.route("/logout").get(userController.logout);

router.route("/refresh").get(userController.refresh);

module.exports = router;
