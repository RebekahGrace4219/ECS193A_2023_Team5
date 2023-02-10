
import React from "react";
import Login from "./login";
const FriendPage = (myId, myEmail) => {
    async function checkFriendExists(id){
        return true; //for now
    }

    async function checkAlreadyFriends(myID, theirID){
        return false; // for now
    }

    async function checkFriendMe(myId, theirID){
        return false;
    }

    async function sendFriendRequest(myId, theirId){
        return false;
    }

    function getMyID(){
        return "555555";
    }

    async function updateFriendCode(theirId){
        if (theirId.target.value.length === 6){
            // Check the server for the item
            if(await !checkFriendExists(theirId)){
                console.log("Cannot add because this person does not exist");
            }
            else if(await checkAlreadyFriends(myId, theirId)){
                console.log("Cannot add because you are already friends.");
            }
            else if(await checkFriendMe(myId, theirId)){
                console.log("This person has a friend request on you already, so you are now friends.");
            }
            else{
                sendFriendRequest(myId, theirId);
                console.log("You sent a friend request");
            }
        }
    }

    async function getFriendRequests(){
        let myId = getMyID();
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