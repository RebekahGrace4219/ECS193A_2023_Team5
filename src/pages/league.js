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
            <div className = "rightSide3Part">
                <div className = "centerInfo">
                    <Header>{{"title": "Social Hub", "type":"league", "leagueID":leagueName, "onButton":props.children.type}}</Header>
                    <LeagueHeader>{{"id": leagueName}}</LeagueHeader>
                    {
                    (props.children.type === "description") ?
                        <LeagueChallengeList>{{"id": leagueName}}</LeagueChallengeList>
                    :
                        <LeagueMemberList>{{"id": leagueName}}</LeagueMemberList>
                    }
                </div>
                <div className = "rightPadding"></div>
                <div className="sidePart">
                    <SuggestionBox>{{"type":"league"}}</SuggestionBox>
                </div>
            </div>

        </div>
    );
}

export default League;