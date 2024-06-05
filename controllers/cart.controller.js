const { User } = require("../models/user.model");

const fetchCart = async (req, res) => {
  const userName = "bula";
  const [user] = await User.find({ name: userName }).populate("cartItems._id");
  res.json({ cartItems: user.cartItems });
};

const mergeCart = async (req, res) => {
  const userName = "bula";
  const { clientCartItems } = req.body;
  const [user] = await User.find({ name: userName });
  const dbCartItems = user.cartItems;

  const cartToBeMerged = [
    ...clientCartItems,
    ...dbCartItems.map((item) => {
      return { _id: item._id.toString(), quantity: item.quantity };
    }),
  ];

  const mergedCartItems = cartToBeMerged.reduce((acc, item) => {
    const [itemExist] = acc.filter((accItem) => accItem._id === item._id);
    !itemExist ? acc.push(item) : (itemExist.quantity += item.quantity);
    return acc;
  }, []);

  user.cartItems = mergedCartItems;
  const updatedUserDetails = await user.save();

  res
    .status(201)
    .json({ message: "received", cartItems: updatedUserDetails.cartItems });
};

const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userName = "bula";
    const [userDetails] = await User.find({ name: userName });

    const [productInCart] = userDetails.cartItems.filter((item) => {
      return item._id.toString() === productId;
    });

    if (productInCart) {
      return res.status(409).json({ message: "Product already in cart" });
    }
    userDetails.cartItems.addToSet({ _id: productId, quantity: 1 });
    await userDetails.save();
    res.status(201).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ message: "Unable to add products to cart" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const userName = "bula";

    const [user] = await User.find({ name: userName });

    const cartItems = user.cartItems.map((item) => item._id.toString());

    if (!cartItems.includes(productId)) {
      return res.status(404).json({ message: "Product doesn't exist in cart" });
    }

    const updatedUserCartItems = user.cartItems.filter(
      (item) => item._id.toString() !== productId
    );

    user.cartItems = updatedUserCartItems;
    await user.save();
    res.status(200).json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json({ message: "Unable to remove product" });
  }
};

const increaseItemQuantity = async (req, res) => {
  try {
    const userName = "bula";
    const { productId } = req.body;
    const [user] = await User.find({ name: userName });

    if (
      !user.cartItems.map((item) => item._id.toString()).includes(productId)
    ) {
      return res.status(404).json({ message: "Product doesn't exist in cart" });
    }
    const updatedUserCart = user.cartItems.map((item) => {
      return item._id.toString() === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });

    user.cartItems = updatedUserCart;
    await user.save();
    res.status(201).json({ message: "quantity increased" });
  } catch (error) {
    res.status(500).json({ message: "unable to increase quantity" });
  }
};

const decreaseItemQuantity = async (req, res) => {
  try {
    const userName = "bula";
    const { productId } = req.body;
    const [user] = await User.find({ name: userName });

    if (
      !user.cartItems.map((item) => item._id.toString()).includes(productId)
    ) {
      return res.status(404).json({ message: "Product doesn't exist in cart" });
    }

    const updatedUserCart = user.cartItems.map((item) => {
      return item._id.toString() === productId
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item;
    });

    user.cartItems = updatedUserCart;
    await user.save();
    res.status(201).json({ message: "quantity decreased" });
  } catch (error) {
    res.status(500).json({ message: "unable to decrease item quantity" });
  }
};

module.exports = {
  fetchCart,
  mergeCart,
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
};
