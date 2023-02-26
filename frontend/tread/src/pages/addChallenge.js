import ChallengeForm from "../components/ChallengeForm/ChallengeForm";
import SideBar from "../components/Shared/SideBar";
import "../css/Shared/page2.css";
const AddChallenge = () => {
    return (
    <div id = "AddChallenge" className = "Body2Part">
        <div className = "leftSide2Part">
            <SideBar></SideBar>
        </div>
        <div className = "rightSide2Part">
            <ChallengeForm></ChallengeForm>
        </div>
    </div>
    );
}

export default AddChallenge;