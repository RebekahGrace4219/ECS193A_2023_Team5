
import React, { useState, useEffect } from 'react';
import Login from "./login";
import axios from 'axios';

const FriendPage = () => {
    const [ useFriendRequests, setFriendRequests ] = useState(false);
    const [ buttonShow, setButtonShow ] = useState(true);
    let code = "testing";
    async function getOpenFriendRequests(email){
        var config = {
            method: 'post',
            url: 'http://localhost:5000/user/friend_request_list/',
            headers: {
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "email": "rebekahgrace234@gmail.com"
            })
        };
        await axios(config)
        .then(function (response) {
            console.log("Grabbing the friend list");
            code = response.data["recieved_requests"]["source"];
            setFriendRequests(true);
        })
        .catch(function (error) {
            console.log(error);
        });
    }







    async function findEmail(theirId){
        /* Make the post request */
        var config = {
            method: 'get',
            url: 'http://localhost:5000/user/getEmail/' + theirId ,
            headers: {
            'Content-Type': 'application/json'
            }
        };

        await axios(config)
        .then(function (response) {
            console.log(response.data);
            console.log("return");
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    async function getFriendRequest(myEmail, theirEmail){
        console.log("the function should get both emails: " , myEmail, theirEmail);
        var config = {
            method: 'post',
            url: 'http://localhost:5000/user/add_friend/',
            headers: {
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "myEmail": myEmail,
                "theirEmail": theirEmail
            })
        };

        await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    async function sendFriendRequest(theirId){
        if (theirId.target.value.length === 6){
            let theirEmail = await findEmail(theirId.target.value);

            let res = await getFriendRequest("rmgrace@ucdavis.edu", "rebekahgrace234@gmail.com");
            console.log(res);
        }
    }

    async function accept(){
        setButtonShow(false);
        console.log("Successfully friend rmgrace@ucdavis.edu");

        var config = {
            method: 'post',
            url: 'http://localhost:5000/user/accept_friend/',
            headers: {
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "myEmail": "rebekahgrace234@gmail.com",
                "theirEmail": "rmgrace@ucdavis.edu"
            })
        };

        await axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

    }
  return (
    <div>
      <h1>Friend Page</h1>
      <div>
        <label>Search for friends</label>
        <input type = "text" name = "textbox" onChange = {sendFriendRequest}/>
      </div>
        <button onClick = {getOpenFriendRequests}>View open friend requests</button>
        {useFriendRequests ? <div>{buttonShow ? <button onClick = {accept}>{"rmgrace@ucdavis.edu"}</button> : <></>}</div> : <></>}
    </div>
  );
};

export default FriendPage;