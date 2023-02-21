const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    authenticationSource: String,
    authenticationID: String,
    givenName: String,
    familyName: String,
    picture: String,
    email: String,
    username: String,
    ifMetric: Boolean,
  },
  {
    collection: "user_info"
  }
);




const User = mongoose.model("User", userSchema);

module.exports = User;
