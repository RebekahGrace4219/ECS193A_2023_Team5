import {useState} from 'react';
import FriendSelect from "./FriendSelect";
import SentSelect from "./SentSelect";
import ReceivedSelect from "./ReceivedSelect";
import BlockedSelect from "./BlockedSelect";
import "../../css/Social/obj.css";
import axios from 'axios';
import "../../css/Shared/button.css";
const backend_url = process.env.REACT_APP_PROD_BACKEND

const FriendObj = (props) => {
    const [selectShow, setSelectShow] = useState();
    let type = props.type;

    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    function unfriend(){
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/remove_friend',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          friendName : props.children.username
        },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
    }

    function block(){
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/block_user',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          friendName : props.children.username
        },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
    }

    function revoke(){
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/remove_sent_request',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          friendName : props.children.username
        },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
      console.log("Revoke sent request");
    }

    function unblock(){
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/unblock_user',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          friendName : props.children.username
        },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
      console.log("Unblock this person");
    }

    function accept(){
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/accept_received_request',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          friendName : props.children.username
        },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
      console.log("Accept received request");
    }

    function decline(){
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/remove_received_request',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          friendName : props.children.username
        },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log(response.data)
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
      console.log("Decline received request");
    }

    function friendReact(event){
      let value = event.target.value;

      if(value === "Unfriend"){
          unfriend();
      }
      else if(value === "Block"){
          block();
      }
      else if(value === "revoke"){
          revoke();
      }
      else if(value === "Unblock"){
          unblock();
      }
      else if (value === "Accept"){
          accept();
      }
      else if (value === "Decline"){
          decline();
      }
    }
    return(
        <div id = "FriendObj" className = "displayObj">
            <div className = "objSection">
                <img className = "objProfilePhoto" src = {props.children.picture}/>
            </div>
            <div className = "objSection objWritingSection">
                <p className = "objDisplayName">{props.children.displayName}</p>
                <p className = "objUsername">{props.children.username}</p>
            </div>
            <div className = "objSection">
                <button className = "moreInfoButton" onClick = {toggleSelectShow}>
                    <img src = "https://i.imgur.com/pnzihUp.png"/>
                </button>
                {(selectShow && type === "friend") ? <FriendSelect friendReact = {friendReact}></FriendSelect>: <></>}
                {(selectShow && type === "sent") ? <SentSelect friendReact = {friendReact}></SentSelect>: <></>}
                {(selectShow && type === "received") ? <ReceivedSelect friendReact = {friendReact}></ReceivedSelect>: <></>}
                {(selectShow && type === "blocked") ? <BlockedSelect friendReact = {friendReact}></BlockedSelect>: <></>}
            </div>
        </div>
    )

}

export default FriendObj;