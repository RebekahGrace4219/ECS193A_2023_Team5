import MemberSelect from "./MemberSelect";
import {useState} from 'react';
import "../../css/League/member.css";

import axios from 'axios';
const backend_url = process.env.REACT_APP_PROD_BACKEND
const MemberEntry = (props) => {
    const [selectShow, setSelectShow] = useState();
    function addFriend(){
        var config = {
            method : 'post',
            url : backend_url + 'friend_list/send_friend_request',
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
              console.log(response.data);
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

    function kickOut(){
        var config = {
            method : 'post',
            url : backend_url + 'league/kick_member',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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

    function ban(){
        var config = {
            method : 'post',
            url : backend_url + 'league/ban_user',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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

    function removeAdmin(){
        var config = {
            method : 'post',
            url : backend_url + 'league/remove_admin',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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

    function addAdmin(){
      console.log("adding admin",
        {
          recipient : props.children.username,
          leagueID: props.leagueID
        });
        var config = {
            method : 'post',
            url : backend_url + 'league/add_admin',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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

    function accept(){
        var config = {
            method : 'post',
            url : backend_url + 'league/accept_join_request',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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

    function decline(){
        var config = {
            method : 'post',
            url : backend_url + 'league/decline_request',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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

    function unban(){
        var config = {
            method : 'post',
            url : backend_url + 'league/unban_user',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              recipient : props.children.username,
              leagueID: props.leagueID
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
        url : backend_url + 'league/undo_invite',
        headers: {
          Accept: 'application/json',
        },
        data :
        {
          recipient : props.children.username,
          leagueID: props.leagueID
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
    function reactionFunction(input){
        let reaction = input.target.value;

        if (reaction === "friend"){
            addFriend();
        }
        else if(reaction === "block"){
            block();
        }
        else if(reaction === "kick"){
            kickOut();
        }
        else if(reaction === "ban"){
            ban();
        }
        else if(reaction === "removeAdmin"){
            removeAdmin();
        }
        else if(reaction === "addAdmin"){
            addAdmin();
        }
        else if(reaction === "accept"){
            accept();
        }
        else if(reaction === "decline"){
            decline();
        }
        else if(reaction === "unban"){
            unban();
        }
        else if (reaction === "revoke"){
          revoke();
        }
    }

    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    return(
        <div className = "memberEntry">
            <div className = "memberEntryLeft">
                <div>
                    <img className = "memberPicture" src = {props.children.picture} />
                </div>
                <div class = "memberNames">
                    <p className = "memberDisplayName memberEntryText">{props.children.displayName}</p>
                    <p className = "memberUsername memberEntryText">{props.children.username}</p>
                </div>
            </div>
            <div className = "memberEntryRight">


            <div>
                {(props.children.role === "admin" || props.children.role === "owner") ?
                <img src = "https://i.imgur.com/551l8WX.png" alt = "key"/>
                :
                <></>
                }
            </div>
                <div>
                {(props.children.role === "owner") ?
                <img src = "https://i.imgur.com/FuiEy2B.png" alt = "crown"/>
                :
                <></>
                }
            </div>

            <div>
                <button className = "moreInfoButton" onClick = {toggleSelectShow}>
                    <img src = "https://i.imgur.com/pnzihUp.png"/>
                </button>
                {(selectShow) ? <MemberSelect memberReact = {reactionFunction} scrollType = {props.scrollType} selfType = {props.selfType} userType = {props.children.role}></MemberSelect>: <></>}
            </div>
            </div>

        </div>


    )
}

export default MemberEntry;