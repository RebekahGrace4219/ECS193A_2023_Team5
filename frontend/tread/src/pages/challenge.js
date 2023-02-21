import SideBar from "../components/Shared/SideBar";
import CurrentChallenge from "../components/Challenge/CurrentChallenge/CurrentChallenge";
import WeeklyChallenge from "../components/Challenge/WeeklyChallenge/WeeklyChallenge";
import "../css/Challenge/challenge.css";

const Challenge = (props) => {

    return (
        <div id = "Challenge">
            <div id = "SideBar">
                <SideBar></SideBar>
            </div>
            <div id = "ChallengeForm">
                {props.children.ifCurrentChallenge ? <CurrentChallenge></CurrentChallenge> : <WeeklyChallenge></WeeklyChallenge>}
            </div>
        </div>
      );
}

export default Challenge;