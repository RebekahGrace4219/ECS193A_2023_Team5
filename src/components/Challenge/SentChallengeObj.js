import BoxLine from "./BoxLine";
import PhotoDisplay from "./PhotoDisplay";
import DeleteChallengeButton from "./DeleteChallengeButton";
const SentChallengeObj = (props) => {
    let title = props.children.exerciseType + " " + props.children.amount + " " + props.children.unit
    let receivedUser = props.children.receivedUser;
    return (
    <div>
        <PhotoDisplay>{{"photos": props.children.photos}}</PhotoDisplay>
        <BoxLine></BoxLine>
        <div>
            <p>{title}</p>
            <p>{receivedUser} hasn't accepted your challenge.</p>
        </div>
        <div>
            <DeleteChallengeButton></DeleteChallengeButton>
        </div>
    </div>
    );
}

export default SentChallengeObj;