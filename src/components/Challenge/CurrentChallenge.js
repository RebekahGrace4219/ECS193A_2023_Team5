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

          {(challengeState === "issued") ? <ChallengeScroll type = "issued"></ChallengeScroll> : <>/</>}
          {(challengeState === "sent") ? <ChallengeScroll type = "sent"></ChallengeScroll> : <>/</>}
          {(challengeState === "received") ? <ChallengeScroll type = "received"></ChallengeScroll> : <>/</>}

        </div>
      );
}

export default CurrentChallenge;