import ChallengeScroll from "./ChallengeScroll";

const WeeklyChallenge = () => {

    return (
            <div id = "WeeklyChallenge">
              <div>
                <h2>Global Challenges</h2>
              </div>

              <ChallengeScroll type = "weekly" ifLeague = {false} leagueID = {""}></ChallengeScroll>
            </div>

          );
}

export default WeeklyChallenge;