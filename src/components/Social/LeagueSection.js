import {useState, useEffect} from 'react';
import LeagueBar from "./LeagueBar";
import LeagueScroll from "./LeagueScroll";

import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import "../../css/Shared/button.css";

const LeagueSection = () => {
    const [leagueState, setLeagueState] = useState("league");

    function addLeague (){
        window.location.href = "./addLeaguePage";
    }

    useEffect (
        () => {
            if(leagueState === "create"){
                console.log( "Set league state to create");
                window.location.href = "./addLeaguePage";
            }
            else{
                console.log( "Set league state to not create", leagueState);
            }
        }, [leagueState]
    );

    return (
        <div id = "LeagueSection" className="section">
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