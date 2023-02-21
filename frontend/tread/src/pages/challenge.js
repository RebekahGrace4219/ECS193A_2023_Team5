import SideBar from "../components/Shared/SideBar";
import CurrentChallenge from "../components/Challenge/currentChallenge";
import WeeklyChallenge from "../components/Challenge/weeklyChallenge";
import "../css/Challenge/challenge.css";

const Challenge = (props) => {

    return (
        <div id = "Challenge">
            <div id = "sideBar">
                <SideBar></SideBar>
            </div>
            <div id = "currentChallengeForm">
                {props.ifCurrentChallenge ? <CurrentChallenge></CurrentChallenge> : <WeeklyChallenge></WeeklyChallenge>}
            </div>
        </div>
      );
}

export default Challenge;