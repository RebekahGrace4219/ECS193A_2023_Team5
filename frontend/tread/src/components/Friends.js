import "../css/friends.css"
import React, { useState, useEffect } from 'react';
import FriendObj from "./FriendObj";
import FriendBar from "./FriendBar";
import FriendSection from './FriendSection';
import axios from 'axios';
const Friends = () => {

    const [ifFriends, setIfFriends] = useState(true);
    const [ifPending, setIfPending] = useState(false);
    const [ifBlocked, setIfBlocked] = useState(false);
    const [ifAddFriend, setIfAddFriend] = useState(false);
    const [divList, setDivList] = useState([{"displayName":"Bruce"}]);
    let pendingFriendsList = [];
    let blockedList = [];

    async function getUpdatedFriendList() {
        var data = JSON.stringify({
            "username" : "RebekahGrace#4219"
        });

        var config = {
            method: 'post',
            url: 'http://localhost:5000/friend_list/friend_list',
            headers: {
              'Content-Type': 'application/json'
            },
            data : data
        };
        let list = [];
        axios(config)
        .then(async function (response) {

            for (let index = 0; index < response.data.friends.length; index++){
                list.push({"displayName":response.data.friends[index]});
            }
            setDivList(list);
        })
        .catch(function (error) {
          console.log(error);
        });


    }

    async function getUpdatedPendingList() {
        var data = JSON.stringify({
            "username" : "RebekahGrace#4219"
        });

        var config = {
            method: 'post',
            url: 'http://localhost:5000/friend_list/pending_requests',
            headers: {
              'Content-Type': 'application/json'
            },
            data : data
        };
        let list = [];
        axios(config)
        .then(async function (response) {
            for (let index = 0; index < response.data["receivedRequests"].length; index++){
                list.push({"displayName":response.data["receivedRequests"][index], "received":true});
            }
            for (let index = 0; index < response.data["sentRequests"].length; index++){
                list.push({"displayName":response.data["sentRequests"][index]});
            }
            console.log(list);
            setDivList(list);
        })
        .catch(function (error) {
          console.log(error);
        });


    }

    async function getUpdatedBlockedList() {
        var data = JSON.stringify({
            "username" : "RebekahGrace#4219"
        });

        var config = {
            method: 'post',
            url: 'http://localhost:5000/friend_list/blocked_list',
            headers: {
              'Content-Type': 'application/json'
            },
            data : data
        };
        let list = [];
        axios(config)
        .then(async function (response) {
            console.log("Hit blocked button");
            console.log(response.data);
            for (let index = 0; index < response.data["blocked"].length; index++){
                list.push({"displayName":response.data.blocked[index]});
            }
            console.log(list);
            setDivList(list);
        })
        .catch(function (error) {
          console.log(error);
        });


    }
    const clickAllButton = (event) => {
        console.log(event);
        setIfFriends(true);
        setIfPending(false);
        setIfBlocked(false);
        setIfAddFriend(false);
    }

    const clickPendingButton = () => {
        setIfFriends(false);
        setIfPending(true);
        setIfBlocked(false);
        setIfAddFriend(false);
    }

    const clickBlockedButton = () => {
        setIfFriends(false);
        setIfPending(false);
        setIfBlocked(true);
        setIfAddFriend(false);
    }

    const clickAddFriendButton = () => {
        setIfFriends(false);
        setIfPending(false);
        setIfBlocked(false);
        setIfAddFriend(true);
    }

    useEffect(
        () => {
          if (ifFriends) {
            getUpdatedFriendList();
          }
        }, [ifFriends]
      );

    useEffect(
        () => {
          if (ifPending) {
            getUpdatedPendingList();
          }
        }, [ifPending]
      );

      useEffect(
        () => {
          if (ifBlocked) {
            getUpdatedBlockedList();
          }
        }, [ifBlocked]
      );

    return (
        <div id = "FriendObj">
            <FriendBar allButton = {clickAllButton} pendingButton = {clickPendingButton} blockedButton = {clickBlockedButton} addFriendButton = {clickAddFriendButton}/>

            { ifAddFriend ?
                <h1>AddFriendHere</h1> :
                <div><input id = "friendsTextInput" type = "text"></input>
                <FriendSection friends = {divList}/></div>
            }
        </div>
    );
}


export default Friends;