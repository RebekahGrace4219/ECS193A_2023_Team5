import ChallengeForm from "../components/ChallengeForm/ChallengeForm";
import SideBar from "../components/Shared/SideBar";
import "../new_css/Shared/page2.css";
const AddChallenge = () => {
    return (
    <div id = "ChallengeForm">
        <SideBar className = "leftSide2Part"></SideBar>
        <ChallengeForm className = "rightSide2Part"></ChallengeForm>
    </div>
    );
}

export default AddChallenge;