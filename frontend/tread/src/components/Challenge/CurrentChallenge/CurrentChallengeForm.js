import CurrentSwitch from "../CurrentSwitch";
import ChallengeScroll from "../ChallengeScroll";
import ChallengeSelectBar from "./ChallengeSelectBar";
import React, {useState, useEffect} from 'react';
import '../../../css/Shared/shared.css';
import '../../../css/Challenge/CurrentChallengeForm.css'
const CurrentChallengeForm = () => {
    const [challengeList, setChallengeList] = useState([]);
    const [challengeScrollType, setChallengeScrollType] = useState("issued");
    const [ifIssued, setIfIssued] = useState(true);
    const [ifSent, setIfSent] = useState(false);
    const [ifIncoming, setIfIncoming] = useState(false);

    async function getIssuedRequests(){
        setChallengeList([{"progress":{"Howard":5, "Rebekah":7, "Prabdheep":12}, "title": "Do 250 push up.", "expiration": "Expires in 2d", "completion":"212/250","shortenedVersion":true, "receivedUser":"Henry Baggins", "sentUser":"BilboBaggins"},
        {"title": "Do 50 deadlifts", "expiration": "Expires in 12d", "completion":"37/50","shortenedVersion":true}]);
    }

    async function getSentRequests(){
      setChallengeList([{"title": "Do 250 push up.", "friend":"friendname", "shortenedVersion":true}]);
    }

    async function getIncomingRequests(){
        setChallengeList([{"title": "Do 250 push up.", "friend":"friendname"}]);
    }

    useEffect(
        () => {
          if (ifIssued) {
            setChallengeScrollType("issued");
            getIssuedRequests();
          }
        }, [ifIssued]
      );

      useEffect(
        () => {
          if (ifSent) {
            setChallengeScrollType("sent");
            getSentRequests();
          }
        }, [ifSent]
      );

      useEffect(
        () => {
          if (ifIncoming) {
            setChallengeScrollType("incoming");
            getIncomingRequests();
          }
        }, [ifIncoming]
      );

    function clickIssued(){
        setIfIssued(true);
        setIfSent(false);
        setIfIncoming(false);
    }

    function clickSent(){
        setIfIssued(false);
        setIfSent(true);
        setIfIncoming(false);
    }

    function clickIncoming(){
        setIfIssued(false);
        setIfSent(false);
        setIfIncoming(true);
    }

    return (
        <div id = "CurrentChallengeForm" className = "challengeForm">
            <div className = "challengeInformationSide">
                <div className = "sectionBar">
                    <h2 className = "sectionBarTitle">Current Challenges</h2>
                    <ChallengeSelectBar>{{"incomingButton":clickIncoming, "sentButton":clickSent, "issuedButton":clickIssued}}</ChallengeSelectBar>
                </div>
                <ChallengeScroll type = {challengeScrollType} displayInformation = {challengeList}></ChallengeScroll>
            </div>
            <div className = "challengeCurrentSwitch">
                <CurrentSwitch/>
            </div>

        </div>
    );
}

export default CurrentChallengeForm;