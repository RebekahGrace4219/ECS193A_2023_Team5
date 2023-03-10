import {useState} from 'react';

import CurrentChallengeBar from './CurrentChallegeBar';
import ChallengeScroll from './ChallengeScroll';

import "../../css/Shared/section.css";
import "../../css/Shared/bar.css";
import "../../css/Challenge/challengeObj.css";

const CurrentChallenge = () => {
    const [challengeState, setChallengeState] = useState("issued");
    return (
        <div className = "challengeSection">
          <div className="selectButtonHeader">
            <h2>Personal Challenges</h2>
            <CurrentChallengeBar func = {setChallengeState}></CurrentChallengeBar>
          </div>

          {(challengeState === "issued") ? <ChallengeScroll type = "issued" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <></>}
          {(challengeState === "sent") ? <ChallengeScroll type = "sent" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <></>}
          {(challengeState === "received") ? <ChallengeScroll type = "received" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <></>}

        </div>
      );
}

export default CurrentChallenge;