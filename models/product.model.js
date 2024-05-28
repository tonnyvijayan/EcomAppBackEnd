const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: "Enter a plant name", unique: true },
  productDescription: { type: String },

  category: { type: String },
  price: { type: Number },
  maxDiscount: { type: Number },
  imageUrl: { type: String },
  new: { type: Boolean },
  rating: { type: String },
  bestseller: { type: Boolean },
  inStock: { type: Boolean },
  deliveryTime: { type: String },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
