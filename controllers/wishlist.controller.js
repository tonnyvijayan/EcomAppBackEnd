const { User } = require("../models/user.model");

const fetchWishlist = async (req, res) => {
  try {
    const userName = "bula";
    const [user] = await User.find({ name: userName });
    res.status(200).json({ userWishlist: user.wishlist });
  } catch (error) {
    res.status(500).json({ message: "unable to fetch user wishlist" });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const userName = "bula";
    const { productId } = req.body;
    const [user] = await User.find({ name: userName });

    const productsInWishlist = user.wishlist.map((item) => item._id.toString());

    if (productsInWishlist.includes(productId)) {
      return res.status(409).json({ message: "Product already in wishlist" });
    }

    productsInWishlist.push(productId);

    user.wishlist = productsInWishlist;

    await user.save();

    res.status(201).json({ message: "Product added to wishlist" });
  } catch (error) {
    res.status(500).json({ message: "unable to add product to wishlist" });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const userName = "bula";
    const { productId } = req.body;
    const [user] = await User.find({ name: userName });

    const productsInWishlist = user.wishlist.map((item) => item._id.toString());
    if (!productsInWishlist.includes(productId)) {
      return res
        .status(404)
        .json({ message: "Product doesn't exist in wishlist" });
    }

    const updatedWishlist = user.wishlist.filter((item) => {
      return item._id.toString() !== productId;
    });

    user.wishlist = updatedWishlist;
    await user.save();
    res.status(200).json({ message: "Product removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Unable to remove product from wishlist" });
  }
};

module.exports = { fetchWishlist, addToWishlist, removeFromWishlist };
