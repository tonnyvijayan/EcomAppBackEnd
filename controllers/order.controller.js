const { User } = require("../models/user.model");
const { format } = require("date-fns");

const placeOrder = async (req, res) => {
  try {
    const userName = req.user;
    const logTime = format(new Date(), "dd/MM/yyyy\tHH:mm:ss");
    const [userDetails] = await User.find({ name: userName });
    if (userDetails.cartItems.length > 0) {
      const currentOrder = {
        items: [...userDetails.cartItems],
        orderDate: format(new Date(), "dd/MM/yyyy\tHH:mm:ss"),
      };
      userDetails.orders.addToSet(currentOrder);
      userDetails.cartItems = [];
      await userDetails.save();
      res.status(201).json({ message: "order confirmed" });
    } else {
      res.status(400).json({ message: "No item in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Unable to place order" });
  }
};

module.exports = {
  placeOrder,
};
