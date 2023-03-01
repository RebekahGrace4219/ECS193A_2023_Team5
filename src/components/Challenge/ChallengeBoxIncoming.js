
import "../../css/Challenge/ChallengeBoxIncoming.css";
import "../../css/Shared/shared.css";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";
const ChallengeBoxIncoming = (props) => {
    return (
        <div id = "ChallengeBoxIncoming" className = "challengeBox">
            <div id = "profileImages">ProfileImagesHere</div>
            <div className = "issuedLine"></div>
            <div>
                <p>{props.children.title} from {props.children.friend}</p>
                <p>You have not accepted this challenge</p>
            </div>
            <AcceptButton challengeID = {props.children.challengeID}></AcceptButton>
            <DeclineButton challengeID = {props.children.challengeID}></DeclineButton>
            <button className = "challengeInformationButton" ></button>
        </div>
    );
}

export default ChallengeBoxIncoming;