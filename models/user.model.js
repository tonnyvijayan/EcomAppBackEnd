const mongoose = require("mongoose");
const { Schema } = mongoose;
const Product = require("./product.model");

const UserSchema = new Schema({
  name: { type: String, required: "Please enter a name", unique: true },
  password: { type: String, required: "Please enter a password" },
  email: { type: String, required: "Please enter an email", unique: true },
  contactNumber: [{ type: String }],
  address: [
    {
      houseNo: { type: String },
      streetName: { type: String },
      district: { type: String },
      state: { type: String },
      country: { type: String },
      pincode: { type: Number },
    },
  ],

  cartItems: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
    },
  ],
  wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  orders: [
    {
      items: [
        {
          type: Schema.Types.ObjectId,
          ref: "Product",
          quantity: { type: Number },
        },
      ],
      orderDate: { type: String },
    },
  ],

  refreshToken: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
