
import React, {useState, useEffect} from 'react';
import AddChallengeButton from './AddChallengeButton';
import ChallengeBoxIssued from "./ChallengeBoxIssued";
import ChallengeBoxIncoming from './ChallengeBoxIncoming';
import ChallengeBoxSent from './ChallengeBoxSent';
import ChallengeBoxGlobal from './ChallengeBoxGlobal';
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