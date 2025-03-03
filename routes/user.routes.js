const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const cartController = require("../controllers/cart.controller");
const wishlistController = require("../controllers/wishlist.controller");
const orderController = require("../controllers/order.controller");
const verifyJwt = require("../middlewares/verifyJwt");

router.route("/createuser").post(userController.createUser);

router.route("/authenticateuser").post(userController.authenticateUser);

router.route("/logout").get(userController.logout);

router.route("/refresh").get(userController.refresh);

router.route("/fetchcart").get(verifyJwt, cartController.fetchCart);

router.route("/mergecart").post(verifyJwt, cartController.mergeCart);

router.route("/addtocart").post(verifyJwt, cartController.addToCart);

router.route("/removefromcart").post(verifyJwt, cartController.removeFromCart);

router
  .route("/increaseitemquantity")
  .post(verifyJwt, cartController.increaseItemQuantity);

router
  .route("/decreaseitemquantity")
  .post(verifyJwt, cartController.decreaseItemQuantity);

router.route("/fetchwishlist").get(verifyJwt, wishlistController.fetchWishlist);

router
  .route("/addtowishlist")
  .post(verifyJwt, wishlistController.addToWishlist);

router
  .route("/removefromwishlist")
  .post(verifyJwt, wishlistController.removeFromWishlist);

router.route("/placeorder").post(verifyJwt, orderController.placeOrder);

module.exports = router;
