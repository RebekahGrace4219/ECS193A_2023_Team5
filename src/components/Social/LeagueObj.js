import {useState} from 'react';
import LeagueSelect from './LeagueSelect';
import OwnerSelect from './OwnerSelect';
import AdminSelect from './AdminSelect';
import SentLeagueSelect from './SentLeagueSelect';
import InviteSelect from './InviteSelect';
import axios from 'axios';

import "../../css/Social/obj.css";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const LeagueObj = (props) => {
    const [selectShow, setSelectShow] = useState();
    const [id, setID] = useState(props.children._id);
    let type = props.type;
    console.log("LeagueObj",props);
    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    function leave(){
        var config = {
            method : 'post',
            url : backend_url + 'league/leave_league',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
          };
          axios(config)
          .then(function(response) {
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function removeAdmin(){
        var config = {
            method : 'post',
            url : backend_url + 'league/user_remove_admin',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
          };
          axios(config)
          .then(function(response) {
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function deleteLeague(){
        var config = {
            method : 'post',
            url : backend_url + 'league/delete_league',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
          };
          axios(config)
          .then(function(response) {
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function revoke(){
        var config = {
            method : 'post',
            url : backend_url + 'league/user_undo_request',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
          };
          axios(config)
          .then(function(response) {
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function decline(){
        var config = {
            method : 'post',
            url : backend_url + 'league/user_decline_invite',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
          };
          axios(config)
          .then(function(response) {
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          });
    }

    function accept(){
        var config = {
            method : 'post',
            url : backend_url + 'league/user_accept_invite',
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: id
            }
          };
          axios(config)
          .then(function(response) {
              console.log(response.data)
          })
          .catch(function(error){
              console.log(error)
          });
    }
    function leagueReact(event){
        let value = event.target.value;
        if(value === "leave"){
            leave();
        }
        else if(value === "remove"){
            removeAdmin();
        }
        else if(value === "delete"){
            deleteLeague();
        }
        else if(value === "revoke"){
            revoke();
        }
        else if(value === "decline"){
            decline();
        }
        else if(value === "accept"){
            accept();
        }
    }

    function moveLeaguePage(){
        window.location.href = "leagueDescriptionPage?=" + props.children._id;
    }
    return(
        <div id = "LeagueObj" className = "displayObj">
            <div className = "objSection">
                <button className = "objButton" onClick = {moveLeaguePage}>
                <img className = "objProfilePhoto" src = {props.children.leaguePicture}/>
                </button>
            </div>
            <div className = "objSection objWritingSection">
                <p className = "objDisplayName">{props.children.leagueName}</p>
                <p className = "objUsername">{props.children.members.length} Members</p>
                <p className = "objUsername">{props.children.activeChallenges} active challenges</p>
            </div>
            <div className = "objSection">
                <button className = "objButton" onClick = {toggleSelectShow}>
                    <img src = "https://i.imgur.com/pnzihUp.png"/>
                </button>
                {(selectShow && type === "league") ? <LeagueSelect leagueReact = {leagueReact}></LeagueSelect>: <></>}
                {(selectShow && type === "owner") ? <OwnerSelect leagueReact = {leagueReact}></OwnerSelect>: <></>}
                {(selectShow && type === "admin") ? <AdminSelect leagueReact = {leagueReact}></AdminSelect>: <></>}
                {(selectShow && type === "sent") ? <SentLeagueSelect leagueReact = {leagueReact}></SentLeagueSelect>: <></>}
                {(selectShow && type === "invite") ? <InviteSelect leagueReact = {leagueReact}></InviteSelect>: <></>}
            </div>
        </div>
    )

}

export default LeagueObj;