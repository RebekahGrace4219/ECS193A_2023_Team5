const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: String,
    email: String,
    username : String,
    sent_requests: [{source: String, dest: String}],
    recieved_requests: [{source: String, dest: String}],
    friends: [String],
  },
  {
    collection: "user_info"
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
