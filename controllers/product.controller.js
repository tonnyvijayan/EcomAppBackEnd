const { Product } = require("../models/product.model");

const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(501).json({ message: "Unable to fetch Products" });
  }
};

const fetchProductDetails = async (req, res) => {
  const { productId } = req.body;
  try {
    const product = await Product.find({ _id: productId });
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(501).json({ message: "Unable to fetch Product" });
  }
};

module.exports = {
  fetchProducts,
  fetchProductDetails,
};
