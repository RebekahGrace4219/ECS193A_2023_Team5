import UserSettingsButton from "../Shared/UserSettingsButton";
import PageSwitch from "../Shared/PageSwitch";

import "../../css/Challenge/challenge.css";
import "../../css/Shared/section.css";

const ChallengeHeader = () => {
    return (<div id = "ChallengeHeader">
        <div id = "ChallengeTitle">
            <h1>Challenges</h1>
            <PageSwitch type = "challenge"></PageSwitch>
        </div>
        <div id = "UserButton">
            <UserSettingsButton/>
        </div>
    </div>);
}

export default ChallengeHeader;