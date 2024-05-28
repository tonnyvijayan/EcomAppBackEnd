const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model");

// router.route("/addproducts").post(async (req, res) => {
//   try {
//     if (plantProduct.length > 0) {
//       for (i = 0; i < plantProduct.length; i++) {
//         const newProduct = new Product(plantProduct[i]);
//         await newProduct.save();
//         console.log("saved video number", i);
//       }
//     }
//     res.send("videos saved");
//   } catch (error) {
//     console.log(error);
//     res.send("failed to add products");
//   }
// });

router.route("/fetchproducts").get(async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(501).json({ message: "Unable to fetch Products" });
  }
});
module.exports = router;
