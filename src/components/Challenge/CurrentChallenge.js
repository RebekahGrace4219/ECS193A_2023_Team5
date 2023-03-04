import {useState} from 'react';
import CurrentChallengeBar from './CurrentChallegeBar';
import ChallengeScroll from './ChallengeScroll';
const CurrentChallenge = () => {
    const [challengeState, setChallengeState] = useState("issued");
    return (
        <div id = "CurrentChallenge">
          <div>
            <h2>Personal Challenges</h2>
            <CurrentChallengeBar func = {setChallengeState}></CurrentChallengeBar>
          </div>

          {(challengeState === "issued") ? <ChallengeScroll type = "issued" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <>/</>}
          {(challengeState === "sent") ? <ChallengeScroll type = "sent" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <>/</>}
          {(challengeState === "received") ? <ChallengeScroll type = "received" ifLeague = {false} leagueID = {""}></ChallengeScroll> : <>/</>}

        </div>
      );
}

export default CurrentChallenge;