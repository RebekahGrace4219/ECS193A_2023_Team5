import LeagueBar from "./LeagueBar";
import LeagueScroll from "./LeagueScroll";
import Line from "../Shared/Line";
import {useState} from 'react';
const LeagueSection = () => {
    const [leagueState, setLeagueState] = useState("league");

    function addLeague (){
        window.location.href = "./addLeaguePage";
    }
    return (
        <div id = "LeagueSection">
            <div>
                <h2>Leagues</h2>
                <LeagueBar func = {setLeagueState}></LeagueBar>
            </div>

        <div>
        <Line></Line>
        <div>
            <button onClick = {addLeague}>Add League</button>
        </div>
        </div>
            { (leagueState === "league") ? <LeagueScroll type = "league"></LeagueScroll> : <></>}
            { (leagueState === "owner") ? <LeagueScroll type = "owner"></LeagueScroll> : <></>}
            { (leagueState === "admin") ? <LeagueScroll type = "admin"></LeagueScroll> : <></>}
            { (leagueState === "sent") ? <LeagueScroll type = "sent"></LeagueScroll> : <></>}


        </div>
        )
}

export default LeagueSection;