const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const cartController = require("../controllers/cart.controller");
const wishlistController = require("../controllers/wishlist.controller");

router.route("/createuser").post(userController.createUser);

router.route("/authenticateuser").post(userController.authenticateUser);

router.route("/logout").get(userController.logout);

router.route("/refresh").get(userController.refresh);

router.route("/fetchcart").get(cartController.fetchCart);

router.route("/addtocart").post(cartController.addToCart);

router.route("/removefromcart").post(cartController.removeFromCart);

router.route("/increaseitemquantity").post(cartController.increaseItemQuantity);

router.route("/decreaseitemquantity").post(cartController.decreaseItemQuantity);

router.route("/fetchwishlist").get(wishlistController.fetchWishlist);

router.route("/addtowishlist").post(wishlistController.addToWishlist);

router.route("/removefromwishlist").post(wishlistController.removeFromWishlist);

////

router.route("/mergecart").post(cartController.mergeCart);

module.exports = router;
