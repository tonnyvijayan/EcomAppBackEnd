const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.route("/fetchproducts").get(productController.fetchProducts);
router
  .route("/fetchproductdetails")
  .post(productController.fetchProductDetails);

module.exports = router;
