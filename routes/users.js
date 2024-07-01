var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/HKtaskDb");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile_number: Number,
  
});

module.exports = mongoose.model("user", userSchema);


