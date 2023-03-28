import React, {useState} from 'react';

import SideBar from '../components/Shared/SideBar';
import Header from "../components/Shared/Header";
import LeagueHeader from "../components/League/LeagueHeader";
import LeagueChallengeList from "../components/League/LeagueChallengeList";
import LeagueMemberList from "../components/League/LeagueMemberList";
import UserSettingsButton from '../components/Shared/UserSettingsButton';
import SuggestionBox from "../components/Shared/SuggestionBox";

import "../css/Shared/page3.css"

const League = (props) => {
    function getLeagueName(){
        let href = window.location.href;
        let locationQuery = href.indexOf("=");
        let substring = href.substring(locationQuery+1);
        return substring;
    }

    const [leagueName] = useState(getLeagueName());

    return(
        <div id = "League" className='Body3Part'>
            <div className = "leftSide3Part">
                <SideBar></SideBar>
            </div>
            {
                (props.children.type === "description") ?
                <div className = "middleSide3Part">
                    <Header>{{"title": "Social Hub", "type":"league", "leagueID":leagueName, "onButton":"description"}}</Header>
                    <LeagueHeader>{{"id": leagueName}}</LeagueHeader>
                    <LeagueChallengeList>{{"id": leagueName}}</LeagueChallengeList>
                </div>
                :
                <div className = "middleSide3Part">
                    <Header>{{"title": "Social Hub", "type":"league", "leagueID":leagueName, "onButton":"member"}}</Header>
                    <LeagueHeader>{{"id": leagueName}}</LeagueHeader>
                    <LeagueMemberList>{{"id": leagueName}}</LeagueMemberList>
                </div>
            }
            <div className = "rightSide3Part">
                <UserSettingsButton/>
                <SuggestionBox>{{"type":"league"}}</SuggestionBox>
            </div>
        </div>
    );
}

export default League;