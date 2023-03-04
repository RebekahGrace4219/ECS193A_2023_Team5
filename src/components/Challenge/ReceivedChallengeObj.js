import PhotoDisplay from "./PhotoDisplay";
import BoxLine from "./BoxLine";
import AcceptChallengeButton from "./AcceptChallengeButton";
import DeclineChallengeButton from "./DeclineChallengeButton";

const ReceivedChallengeObj = (props) => {
    let title = props.children.exerciseType + " " + props.children.amount + " " + props.children.unit
    let dueDate = props.children.dueDate;
    return (
    <div id = "ReceivedChallengedObj">
        <PhotoDisplay>{{"photos": props.children.photos}}</PhotoDisplay>
        <BoxLine></BoxLine>
        <div>
            <p>{title}</p>
            <p>{dueDate}</p>
        </div>
        <AcceptChallengeButton></AcceptChallengeButton>
        <DeclineChallengeButton></DeclineChallengeButton>
    </div>
    );
}

export default ReceivedChallengeObj;