
import ProgressBar from '../ProgressBar.js';
import "../../../css/Challenge/ChallengeBoxIssued.css";
import "../../../css/Shared/shared.css";
import CompleteInformation from './CompleteInformation.js';
import IssuedTitle from './IssuedTitle.js';
const ChallengeBoxIssued = (props) => {
    /*            <div id = "peopleCount">People Image</div>
            <div id = "line"></div>
            <div id = "exerciseProgress">
                <div id = "exerciseDescription">
                    <p id = "exerciseTitle">Do 150 pushups</p>
                    <p id = "exerciseDueDate">Expires in 2d</p>
                </div>
                <div id = "progressBar">
                    <ProgressBar></ProgressBar>
                </div>
            </div>
            <div id = "seeMoreSection">
                <button id = "seeMoreButton"></button>
                <p id = "countedProgress">11/50</p>
            </div>
*/
    return (
        <div id = "ChallengeBoxIssued"  className = "challengeBox">
            <div id = "issuedImages">
                <img id = "issuedImage" src = "https://i.imgur.com/XY9rcVx.png" alt = "all profile photos of people in challenge"/>
            </div>
            <div id = "issuedLine">
            </div>
            <div id = "issuedInformationSide">
                <div id = "issuedProgressBar">
                    <IssuedTitle title = {props.title} expiration = {props.expiration}/>
                    <ProgressBar/>
                </div>
                <div id = "issuedInformation">
                    <button className = "challengeInformationButton"></button>
                    <CompleteInformation information = {props.information}/>
                </div>
            </div>

        </div>
    );
}

export default ChallengeBoxIssued;