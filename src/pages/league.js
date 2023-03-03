import React, {useState} from 'react';

import SideBar from '../components/Shared/SideBar';
import SocialHeader from "../components/Social/SocialHeader";
import LeagueHeader from "../components/League/LeagueHeader";
import LeagueChallengeList from "../components/League/LeagueChallengeList";
import LeagueLeaderboard from "../components/League/LeagueLeaderboard";
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
                    <SocialHeader>{{"type":"noButton"}}</SocialHeader>
                    <LeagueHeader>{{"name": {leagueName}}}</LeagueHeader>
                    <LeagueChallengeList>{{"name": {leagueName}}}</LeagueChallengeList>
                    <LeagueLeaderboard>{{"name": {leagueName}}}</LeagueLeaderboard>
                </div>
                :
                <div className = "middleSide3Part">
                    <SocialHeader>{{"type":"noButton"}}</SocialHeader>
                    <LeagueHeader>{{"name": {leagueName}}}</LeagueHeader>
                    <LeagueMemberList>{{"name": {leagueName}}}</LeagueMemberList>
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