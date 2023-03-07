import BoxLine from "./BoxLine";
import PhotoDisplay from "./PhotoDisplay";
import DeleteChallengeButton from "./DeleteChallengeButton";
const SentChallengeObj = (props) => {

    let title = props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit
    let receivedUser = props.children.receivedUser;
    return (
    <div className = "challengeBox completeChallengeBox">
        <div className="photoDiv">
            <PhotoDisplay></PhotoDisplay>
            <BoxLine></BoxLine>
        </div>
        <div className="challengeMiddle">
            <p className="challengeText">{title}</p>
            <p className="challengeText">{receivedUser} hasn't accepted your challenge.</p>
        </div>
        <div className = "challengeEnd">
            <DeleteChallengeButton></DeleteChallengeButton>
        </div>
    </div>
    );
}

export default SentChallengeObj;