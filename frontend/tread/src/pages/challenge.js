import SideBar from "../components/Shared/SideBar";
import CurrentChallenge from "../components/Challenge/CurrentChallenge";
import WeeklyChallenge from "../components/Challenge/WeeklyChallenge";
import "../css/Shared/page2.css";

const Challenge = (props) => {

    return (
        <div id = "Challenge" className="Body2Part">
            <div className = "leftSide2Part">
            <SideBar ></SideBar>
            </div>

            <div className = "rightSide2Part">
                {(props.children.type === "current") ? <CurrentChallenge></CurrentChallenge> : <WeeklyChallenge></WeeklyChallenge>}
            </div>
        </div>
      );
}

export default Challenge;