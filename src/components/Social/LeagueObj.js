import {useState} from 'react';
import LeagueSelect from './LeagueSelect';
import OwnerSelect from './OwnerSelect';
import AdminSelect from './AdminSelect';
import SentLeagueSelect from './SentLeagueSelect';
import "../../css/Social/obj.css";

import axios from 'axios';

const backend_url = process.env.REACT_APP_DEV_BACKEND

const LeagueObj = (props) => {
    const [selectShow, setSelectShow] = useState();
    let type = props.type;
    console.log("LeagueObj",props);
    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    function leave(){
      // console.log(props.children._id)
      // var config = {
      //   method : 'post',
      //   url : backend_url + 'league/leave_league',
      //   headers: {
      //     Accept: 'application/json',
      //   },
      //   data :
      //   {
      //     leagueID : props.children._id
      //   },
      //   withCredentials: true,
      //   credentials: 'include'
      // };
      // axios(config)
      // .then(function(response) {
      //     console.log(response.data)
      // })
      // .catch(function(error){
      //     console.log(error)
      //     console.log("No response")
      // });
      console.log("Leave the league")
    }

    function removeAdmin(){
        console.log("remove admin");
    }

    function deleteLeague(){
        console.log("delete league");
    }

    function revoke(){
        console.log("revoke request to join league");
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
            </div>
        </div>
    )

}

export default LeagueObj;