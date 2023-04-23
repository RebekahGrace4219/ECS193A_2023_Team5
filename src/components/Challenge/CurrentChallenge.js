import {useState, useEffect} from 'react';

import CurrentChallengeBar from './CurrentChallegeBar';
import ChallengeScroll from './ChallengeScroll';

import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import "../../css/Challenge/challengeObj.css";
import AddChallengeButton from './AddChallengeButton';
const CurrentChallenge = () => {
    const [challengeState, setChallengeState] = useState("issued");


    useEffect(
      () => {
        if (challengeState === "add") {
          window.location.href = "/addChallengePage";
        }

      }, [challengeState]
    );


    return (
        <div className = "challengeSection">
          <div id = "TopPart" className="selectButtonHeader">
            <h2>Personal</h2>
            <CurrentChallengeBar func = {setChallengeState}></CurrentChallengeBar>
          </div>
          <div id = "BottomPart">
          {(challengeState === "issued") ? <ChallengeScroll type = "issued" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <></>}
          {(challengeState === "sent") ? <ChallengeScroll type = "sent" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <></>}
          {(challengeState === "received") ? <ChallengeScroll type = "received" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <></>}
          </div>
        </div>
      );
}

export default CurrentChallenge;