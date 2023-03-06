import BoxLine from "./BoxLine";
import PhotoDisplay from "./PhotoDisplay";
import DeleteChallengeButton from "./DeleteChallengeButton";
const SentChallengeObj = (props) => {
    let title = props.children.exerciseType + " " + props.children.amount + " " + props.children.unit
    let receivedUser = props.children.receivedUser;
    return (
    <div className = "challengeBox completeChallengeBox">
        <div className="photoDiv">
            <PhotoDisplay>{{"photos": props.children.photos}}</PhotoDisplay>
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