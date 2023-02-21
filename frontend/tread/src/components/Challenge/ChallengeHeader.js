import UserSettingsButton from "../UserSettingsButton";
import "../../css/Shared/shared.css"
import "../../css/Challenge/ChallengeHeader.css"
const ChallengeHeader = (props) => {

    return (<div id = "ChallengeHeader">
        <div id = "challengeTitle">
            <h1>Challenges</h1>
            <h2 id = "headerDescription">{props.headerType} Challenges</h2>
        </div>
        <div id = "userButton">
            <UserSettingsButton/>
        </div>
    </div>);
}

export default ChallengeHeader;