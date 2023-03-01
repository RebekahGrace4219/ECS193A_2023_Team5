import CurrentSwitch from "./CurrentSwitch";
import ChallengeScroll from "./ChallengeScroll";
import '../../css/Shared/shared.css';
const WeeklyChallengeForm = () => {
    let challengeScrollType = "global";
    let challengeList = [{"title": "Do 250 push up.", "friend":"friendname"}];
    return (
        <div id = "WeeklyChallengeForm" className = "challengeForm">
            <div className = "challengeInformationSide">
                <div>
                    <h2>Weekly Challenges</h2>
                </div>
                <ChallengeScroll type = {challengeScrollType} displayInformation = {challengeList}/>
            </div>
            <div className = "challengeCurrentSwitch">
                <CurrentSwitch/>
            </div>

        </div>
    );
}

export default WeeklyChallengeForm;