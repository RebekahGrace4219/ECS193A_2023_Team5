import React from "react";
// Here, display the friend name and userid
function friendRequestDiv () {
    async function checkFriendExists(id){
        return true; //for now
    }

    async function checkAlreadyFriends(myID, theirID){
        return false; // for now
    }

    async function checkFriendMe(myId, theirID){
        return false;
    }

    function getMyID(){
        return "555555";
    }

    async function updateFriendCode(theirId){
        let myId = getMyID();
        if (theirId.length === 6){
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
                console.log("You sent a friend request");
            }
        }
    }
    return (
        <div>
            <input type = "text" name = "textbox" onChange = {updateFriendCode}></input>
            <textarea > </textarea>
        </div>
    );
};
export default friendRequestDiv;