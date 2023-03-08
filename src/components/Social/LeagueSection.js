import LeagueBar from "./LeagueBar";
import LeagueScroll from "./LeagueScroll";
import Line from "../Shared/Line";
import {useState} from 'react';
import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import "../../css/Shared/button.css";
const LeagueSection = () => {
    const [leagueState, setLeagueState] = useState("league");

    function addLeague (){
        window.location.href = "./addLeaguePage";
    }

    return (
        <div id = "LeagueSection" className="section">
            <div>
                <button className = "submitButton" onClick = {addLeague}><p className = "submitButtonText">Add League</p></button>
            </div>

            <div className ="selectButtonHeader">
                <h1>Leagues</h1>
                <LeagueBar func = {setLeagueState}></LeagueBar>
            </div>

        <div>

        </div>
            { (leagueState === "league") ? <LeagueScroll type = "league"></LeagueScroll> : <></>}
            { (leagueState === "owner") ? <LeagueScroll type = "owner"></LeagueScroll> : <></>}
            { (leagueState === "admin") ? <LeagueScroll type = "admin"></LeagueScroll> : <></>}
            { (leagueState === "sent") ? <LeagueScroll type = "sent"></LeagueScroll> : <></>}
            { (leagueState === "invite") ? <LeagueScroll type = "invite"></LeagueScroll> : <></>}


        </div>
        )
}

export default LeagueSection;