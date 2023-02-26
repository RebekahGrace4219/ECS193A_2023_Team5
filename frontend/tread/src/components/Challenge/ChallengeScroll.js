
import React, {useState, useEffect} from 'react';
import AddChallengeButton from './CurrentChallenge/AddChallengeButton';
import ChallengeBoxIssued from "./CurrentChallenge/ChallengeBoxIssued";
import ChallengeBoxIncoming from './CurrentChallenge/ChallengeBoxIncoming';
import ChallengeBoxSent from './CurrentChallenge/ChallengeBoxSent';
import ChallengeBoxGlobal from './WeeklyChallenge/ChallengeBoxGlobal';
import '../../css/Challenge/ChallengeScroll.css';
const ChallengeScroll = (props) => {

    function issuedChallenges(challenge){
        return (<ChallengeBoxIssued>{challenge}</ChallengeBoxIssued>);
    }
    function sentChallenges(challenge){
        return (<ChallengeBoxSent>{challenge}</ChallengeBoxSent>);
    }
    function incomingChallenges(challenge){
        return (<ChallengeBoxIncoming>{challenge}</ChallengeBoxIncoming>);
    }
    function globalChallenges(challenge){
        return (<ChallengeBoxGlobal>{challenge}</ChallengeBoxGlobal>);
    }
    return (
        <div id = "ChallengeScroll">
            {(props.type === "issued") ? <div>{props.displayInformation.map(issuedChallenges)}</div> :<></>}
            {(props.type === "sent") ? <div>{props.displayInformation.map(sentChallenges)}</div> :<></>}
            {(props.type === "incoming") ? <div>{props.displayInformation.map(incomingChallenges)}</div> :<></>}
            {(props.type === "global") ? <div>{props.displayInformation.map(globalChallenges)}</div> :<></>}
            {(props.type === "issued") ? <AddChallengeButton></AddChallengeButton>:<></> }
        </div>
    );
    //return (<div></div>);
}

export default ChallengeScroll;