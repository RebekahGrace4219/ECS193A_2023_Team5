import React, {useState, useEffect} from 'react';
import '../../css/Social/addFriend.css'
import axios from 'axios';
// const backend_url = process.env.REACT_APP_PROD_BACKEND
const backend_url = process.env.REACT_APP_PROD_BACKEND

const FriendAdd = () => {

    const [userText, setUserText] = useState("");
    const [usernameText, setUsernameText] = useState("");

    async function sendFriendRequest(){

        var config = {
            method : 'post',
            url : backend_url + 'friend_list/send_friend_request',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              friendName : usernameText
            },
            withCredentials: true,
            credentials: 'include'
          };
          axios(config)
          .then(function(response) {
              console.log(response.data);
          })
          .catch(function(error){
              console.log(error)
              console.log("No response")
          });
    }

    const handleTextChange = (event) => {
        setUsernameText(event.target.value);
    }

    return (<div >
        <div id = "addFriendInputForm">
        <div>
            <input id = "textInput"  placeholder = "username#0000" type = "text" onChange = {handleTextChange}></input>
            <p>{userText}</p>
        </div>
        <button id = "buttonInput"  type = "button" onClick = {sendFriendRequest}>Send</button>
        </div>
    </div>);



}

export default FriendAdd;