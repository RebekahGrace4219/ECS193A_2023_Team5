import CurrentSwitch from "../CurrentSwitch";
import ChallengeScroll from "../ChallengeScroll";
import '../../../css/Shared/shared.css';
const WeeklyChallengeForm = () => {
    return (
        <div id = "WeeklyChallengeForm" className = "challengeForm">
            <div className = "challengeInformationSide">
                <div>
                    <h2>Weekly Challenges</h2>
                </div>
                <ChallengeScroll/>
            </div>
            <div className = "challengeCurrentSwitch">
                <CurrentSwitch/>
            </div>

        </div>
    );
}

export default WeeklyChallengeForm;