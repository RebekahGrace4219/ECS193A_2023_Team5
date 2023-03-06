import {useState} from 'react';
import FriendSelect from "./FriendSelect";
import SentSelect from "./SentSelect";
import ReceivedSelect from "./ReceivedSelect";
import BlockedSelect from "./BlockedSelect";
import "../../css/Social/obj.css";
import axios from 'axios';

const backend_url = process.env.REACT_APP_DEV_BACKEND

const FriendObj = (props) => {
    const [selectShow, setSelectShow] = useState();
    let type = props.type;

    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    function unfriend(){
      console.log(props.children[0].username)
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/remove_friend',
        headers: {
          Accept: 'application/json',
        },
        data : 
        {
          friendName : props.children[0].username
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
      console.log(props.children[0].username)
      var config = {
        method : 'post',
        url : backend_url + 'friend_list/block_user',
        headers: {
          Accept: 'application/json',
        },
        data : 
        {
          target : props.children[0].username
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
        console.log("Revoke sent request");
    }

    function unblock(){
        console.log("Unblock this person");
    }

    function accept(){
        console.log("Accept received request");
    }

    function decline(){
        console.log("Decline received request");
    }

    function friendReact(event){
      let value = event.target.value;
      console.log(value)
      if(value === "Unfriend"){
          unfriend();
      }
      else if(value === "Block"){
          block();
      }
      else if(value === "revoke"){
          revoke();
      }
      else if(value === "unblock"){
          unblock();
      }
      else if (value === "accept"){
          accept();
      }
      else if (value === "decline"){
          decline();
      }
    }
    return(
        <div id = "FriendObj" className = "displayObj">
            <div className = "objSection">
                <img className = "friendProfilePhoto" src = {props.children[0].profilePicture}/>
            </div>
            <div className = "objSection objWritingSection">
                <p className = "objDisplayName">{props.children[0].displayName}</p>
                <p className = "objUsername">{props.children[0].username}</p>
            </div>
            <div className = "objSection">
                <button className = "objButton" onClick = {toggleSelectShow}>
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