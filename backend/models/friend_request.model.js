const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*
    Rules: friend request is moving from "from_email" to "to_email"
    If the reverse exists, do not allow the request -> error, this person is requesting your friend already
    If they are already friends, do not allow the request -> error, they are already friends
    // Eventually, If one has blocked the other, do not allow the request
    If they are already requesting, do not allow the request -> you have requested this person already
*/
const userSchema = new Schema(
  {
    to_email: String,
    from_email: String
  },
  {
    collection: "friend_request_info"
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
