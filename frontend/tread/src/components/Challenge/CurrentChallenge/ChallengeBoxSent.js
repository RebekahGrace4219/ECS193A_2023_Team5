
import "../../../css/Challenge/ChallengeBoxSent.css";
import "../../../css/Shared/shared.css";
const ChallengeBoxSent = (props) => {
    return (
        <div id = "ChallengeBoxSent" className = "challengeBox">
            <div id = "profileImages">ProfileImagesHere</div>
            <div className = "issuedLine"></div>
            <div>
                <p>{props.children.title}</p>
                <p>{props.children.friend} has not accepted your invitation.</p>
            </div>

        </div>
    );
}

export default ChallengeBoxSent;