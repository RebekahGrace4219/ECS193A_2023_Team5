import PhotoDisplay from "./PhotoDisplay";
import BoxLine from "./BoxLine";
import AcceptChallengeButton from "./AcceptChallengeButton";
import DeclineChallengeButton from "./DeclineChallengeButton";

const ReceivedChallengeObj = (props) => {
    let title = props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit;
    let dueDate = new Date(props.children.dueDate).toISOString().split("T")[0];

    return (
    <div id = "ReceivedChallengedObj" className = "challengeBox completeChallengeBox">
        <div className="photoDiv">
            <PhotoDisplay photos = {props.children.pictures}></PhotoDisplay>
            <BoxLine></BoxLine>
        </div>
        <div className="challengeMiddle">
            <p className="challengeText">{title}</p>
            <p className="challengeText">{dueDate}</p>
        </div>
        <div className = "challengeEnd">
            <AcceptChallengeButton id = {props.children._id}></AcceptChallengeButton>
            <DeclineChallengeButton id = {props.children._id}></DeclineChallengeButton>
        </div>
    </div>
    );
}

export default ReceivedChallengeObj;