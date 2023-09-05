const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
