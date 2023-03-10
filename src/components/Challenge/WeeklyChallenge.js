import ChallengeScroll from "./ChallengeScroll";

import "../../css/Challenge/challengeObj.css"
const WeeklyChallenge = () => {
    return (
            <div id = "WeeklyChallenge" className = "challengeSection">
              <div>
                <h2>Global Challenges</h2>
              </div>

              <ChallengeScroll type = "weekly" ifLeague = {false} leagueID = {""}></ChallengeScroll>
            </div>
          );
}

export default WeeklyChallenge;