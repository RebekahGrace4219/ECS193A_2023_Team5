
import "../../css/Challenge/ChallengeBoxGlobal.css";
import "../../css/Shared/shared.css";
import ProgressBar from "../Shared/ProgressBar";
import CompleteInformation from "./CompleteInformation";
const ChallengeBoxGlobal = (props) => {
    return (
        <div id = "ChallengeBoxGlobal" className = "challengeBox">
            <div id = "globalImages">
                <img src = ""></img>
            </div>
            <div className = "issuedLine"></div>
            <div id = "issuedInformationSide">
                <div id = "issuedProgressBar">
                    <p>{props.title}</p>
                    <ProgressBar>{{"completed":10}}</ProgressBar>
                </div>
                <div id = "issuedInformation">
                    <button className = "challengeInformationButton"></button>
                    <CompleteInformation information = {props.information}/>
                </div>
            </div>
        </div>
    );
}

export default ChallengeBoxGlobal;