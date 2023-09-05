const User = require("../models/user");
const Address = require("../models/address");

async function registerUser(req, res) {
  const { name, address } = req.body;

  // validations
  if (!name || typeof name !== "string") {
    return res.status(400).json({
      success: false,
      message: "Name is required and must be a string",
    });
  }
  if (name.length < 2 || name.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Name must be between 2 and 50 characters in length",
    });
  }
  if (!address || typeof address !== "string") {
    return res.status(400).json({
      success: false,
      message: "Address is required and must be a string",
    });
  }

  try {
    const user = new User({
      name,
    });
    await user.save();

    const userAddress = new Address({
      address,
      userId: user._id,
    });
    await userAddress.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      payload: {
        name: user.name,
        address: userAddress.address,
      },
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
}

module.exports = {
  registerUser,
};
