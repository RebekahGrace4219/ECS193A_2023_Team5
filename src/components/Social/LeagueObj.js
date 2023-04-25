import {useState, useEffect} from 'react';
import LeagueSelect from './LeagueSelect';
import axios from 'axios';
import {createLeaguePictureURL} from "../../Helpers/CloudinaryURLHelpers";
import "../../css/Social/obj.css";
import "../../css/Shared/dropDown.css";
const backend_url = process.env.REACT_APP_PROD_BACKEND;

const LeagueObj = (props) => {
    const [load, setLoad] = useState(false);
    const [role, setRole] = useState("none");
    const [selectShow, setSelectShow] = useState();

    const id = props.children._id;
    let type = props.type;

    useEffect (
        () => {
            if(!load){
                getRole();
                setLoad(true);
            }
        }, [load]
    );

    function getRole(){
        var config  = {
          method : 'post',
          url: backend_url+'league/get_role',
          headers: {
              Accept: 'application/json',
            },
          withCredentials: true,
          credentials: 'include',
          data : {
            leagueID: id
          }
        };
        axios(config)
        .then(function(response) {
            setRole(response.data);
        })
        .catch(function(error){
            setRole(
                "none"
            );
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
    }

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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
                <img className = "objProfilePhoto" src = {createLeaguePictureURL(id)} alt = "league"/>
                </button>
            </div>
            <div className = "objSection objWritingSection">
                <p className = "objDisplayName">{props.children.leagueName}</p>
                <p className = "objUsername">{props.children.members.length} Members</p>
                <p className = "objUsername">{props.children.activeChallenges} active challenges</p>
            </div>
            <div className = "objSection">
                <button className = "objButton" onClick = {toggleSelectShow}>
                    <img src = "https://i.imgur.com/pnzihUp.png" alt = "toggle button"/>
                </button>
                {(selectShow) ? <LeagueSelect role = {role} type = {type} leagueReact = {leagueReact}></LeagueSelect>: <></>}
            </div>
        </div>
    )

}

export default LeagueObj;