import SideBar from "../components/SideBar";
import ChallengeHeader from "../components/Challenge/ChallengeHeader"
import Line from "../components/Line"
const Challenge = () => {

    return (
        <div id = "Challenge">
            <div id = "sideBar">
                <SideBar></SideBar>
            </div>
            <div id = "challengePage">
                <ChallengeHeader headerType = "Current"/>
                <Line />
            </div>
        </div>
      );
}

export default Challenge;