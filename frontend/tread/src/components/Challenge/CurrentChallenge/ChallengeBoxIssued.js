
import ProgressBar from "../../Shared/ProgressBar";
import "../../../css/Challenge/ChallengeBoxIssued.css";
import "../../../css/Shared/shared.css";
import CompleteInformation from './CompleteInformation.js';
import IssuedTitle from './IssuedTitle.js';
import LeaderboardChallenge from "../../Shared/Leaderboard";
import {useState} from 'react';
const ChallengeBoxIssued = (props) => {
    const [shortVersion, setShortVersion] = useState(true);

    /*console.log(props);

    const [shortVersion, setShortVersion] = props.children;*/
    /*            <div id = "peopleCount">People Image</div>
            <div id = "line"></div>
            <div id = "exerciseProgress">
                <div id = "exerciseDescription">
                    <p id = "exerciseTitle">Do 150 pushups</p>
                    <p id = "exerciseDueDate">Expires in 2d</p>
                </div>
                <div id = "progressBar">
                    <ProgressBar></ProgressBar>
                </div>
            </div>
            <div id = "seeMoreSection">
                <button id = "seeMoreButton"></button>
                <p id = "countedProgress">11/50</p>
            </div>
*/
    function switchState(){
        setShortVersion(!shortVersion);
    }
    return (
        <div>
        { shortVersion ? <div id = "ChallengeBoxIssued"  className = "challengeBox">
            <div id = "issuedImages">
                <img id = "issuedImage" src = "https://i.imgur.com/XY9rcVx.png" alt = "all profile photos of people in challenge"/>
            </div>
            <div className = "issuedLine">
            </div>
            <div id = "issuedInformationSide">
                <div id = "issuedProgressBar">
                    <IssuedTitle title = {props.title} expiration = {props.expiration}/>
                    <ProgressBar>{{"completed":10}}</ProgressBar>
                </div>
                <div id = "issuedInformation">
                    <button className = "challengeInformationButton" onClick = {switchState}></button>
                    <CompleteInformation information = {props.information}/>
                </div>
            </div>

        </div> :
            <div id = "ChallengeBoxIssuedLong"  className = "longChallengeBox">

<div id = "issuedImages">
                <img id = "issuedImage" src = "https://i.imgur.com/XY9rcVx.png" alt = "all profile photos of people in challenge"/>
            </div>
            <div className = "issuedLine">
            </div>
            <div id = "issuedInformationSide">
                <div id = "issuedProgressBar">
                    <IssuedTitle title = {props.title} expiration = {props.expiration}/>
                    <ProgressBar>{{"completed":10}}</ProgressBar>
                </div>
                <div id = "issuedInformation">
                    <button className = "challengeInformationButton" onClick = {switchState}></button>
                    <CompleteInformation information = {props.information}/>
                </div>
            </div>
                <h1>Challenge Details</h1>
                <h2>Issued by: {props.children.sentUser}</h2>
                <h2>Issued to: {props.children.receivedUser}</h2>
                <LeaderboardChallenge>{{"progress":props.children.progress}}</LeaderboardChallenge>
            </div>



        }</div>
    );
}

export default ChallengeBoxIssued;