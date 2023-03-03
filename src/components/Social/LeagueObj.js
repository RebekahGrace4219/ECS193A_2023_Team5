import {useState} from 'react';
import LeagueSelect from './LeagueSelect';
import OwnerSelect from './OwnerSelect';
import AdminSelect from './AdminSelect';
import SentLeagueSelect from './SentLeagueSelect';
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
    return(
        <div id = "LeagueObj">
            <div>
                <img src = {props.children.picture}/>
            </div>
            <div>
                <p>{props.children.leagueName}</p>
                <p>{props.children.memberCount} Members</p>
                <p>{props.children.challengeCount} active challenges</p>
            </div>
            <div>
                <button onClick = {toggleSelectShow}>
                    <img src = ""/>
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