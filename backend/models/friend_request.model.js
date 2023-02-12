const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*
    Rules: friend request is moving from "from_email" to "to_email"
    If the reverse exists, automatically accept.
    If they are already friends, do not allow the request -> error, they are already friends
    // Eventually, If one has blocked the other, do not allow the request
    If they are already requesting, do not allow the request -> you have requested this person already
*/
const friendRequestSchema = new Schema(
  {
    toEmail: String,
    fromEmail: String
  },
  {
    collection: "friend_requests"
  }
);

const Friend_requests = mongoose.model("Friend_requests", friendRequestSchema);

module.exports = Friend_requests;
