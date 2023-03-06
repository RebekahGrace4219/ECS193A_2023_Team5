import PhotoDisplay from "./PhotoDisplay";
import BoxLine from "./BoxLine";
import AcceptChallengeButton from "./AcceptChallengeButton";
import DeclineChallengeButton from "./DeclineChallengeButton";

const ReceivedChallengeObj = (props) => {
    let title = props.children.exerciseType + " " + props.children.amount + " " + props.children.unit
    let dueDate = props.children.dueDate;
    return (
    <div id = "ReceivedChallengedObj" className = "challengeBox completeChallengeBox">
        <div className="photoDiv">
            <PhotoDisplay>{{"photos": props.children.photos}}</PhotoDisplay>
            <BoxLine></BoxLine>
        </div>
        <div className="challengeMiddle">
            <p className="challengeText">{title}</p>
            <p className="challengeText">{dueDate}</p>
        </div>
        <div className = "challengeEnd">
            <AcceptChallengeButton></AcceptChallengeButton>
            <DeclineChallengeButton></DeclineChallengeButton>
        </div>
    </div>
    );
}

export default ReceivedChallengeObj;