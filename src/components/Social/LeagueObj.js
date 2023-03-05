import {useState} from 'react';
import LeagueSelect from './LeagueSelect';
import OwnerSelect from './OwnerSelect';
import AdminSelect from './AdminSelect';
import SentLeagueSelect from './SentLeagueSelect';

import "../../css/Social/obj.css";
const LeagueObj = (props) => {
    const [selectShow, setSelectShow] = useState();
    let type = props.type;

    function toggleSelectShow(){
        setSelectShow(!selectShow);
    }

    function leave(){
        console.log("leave the league");
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

    function leagueReact(value){
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
        window.location.href = "leagueDescriptionPage?=" + props.children.leagueID;
    }
    return(
        <div id = "LeagueObj" className = "displayObj">
            <div className = "objSection">
                <button className = "objButton" onClick = {moveLeaguePage}>
                <img className = "friendProfilePhoto" src = {props.children.picture}/>
                </button>
            </div>
            <div className = "objSection objWritingSection">
                <p className = "objDisplayName">{props.children.leagueName}</p>
                <p className = "objUsername">{props.children.memberCount} Members</p>
                <p className = "objUsername">{props.children.challengeCount} active challenges</p>
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