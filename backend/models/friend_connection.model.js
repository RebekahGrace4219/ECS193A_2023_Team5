const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
    Rules: (friend_1_email, friend_2_email) pairing should be unique in the database
    friend_1_email should be alphabetically before friend_2_email
*/
const userSchema = new Schema(
  {
    friend_1_email: String,
    friend_2_email: String
  },
  {
    collection: "friend_connection"
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
