
import React from "react";
import Login from "./login";
const FriendPage = () => {
    async function sendFriendRequest(theirId){
        let myEmail = Login.getEmail();

        if (theirId.target.value.length === 6){
            /* Make the post request */

        }
    }

    async function getFriendRequests(){
        let myId = getMyEmail()
        return false;
        // to do

    }
    async function viewOpenFriendRequests(){
        await getFriendRequests();
    }

  return (
    <div>
      <h1>Friend Page</h1>
      <div>
        <label>Search for friends</label>
        <input type = "text" name = "textbox" onChange = {updateFriendCode}/>
      </div>
      <div>
        <label>View open friend requests</label>

        </div>
    </div>
  );
};

export default FriendPage;