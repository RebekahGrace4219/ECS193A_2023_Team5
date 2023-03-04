import PhotoDisplay from "./PhotoDisplay";
import BoxLine from "./BoxLine";
import ProgressBar from "../Shared/ProgressBar";
import {useState} from "react";
import Line from "../Shared/Line";
import Leaderboard from "../Shared/Leaderboard";
const IssuedChallengeObj = (props) => {
    let myProgress = props.children.progress[props.username];
    let total = props.children.amount;
    let percentageDone = myProgress/total * 100;
    let title = props.children.exerciseType + " " + props.children.amount + " " + props.children.unit
    let dueDate = props.children.dueDate;

    const [showState, setState] = useState(false);
    function toggleState(){
        setState(!showState);
    }

    function sortProgress(a, b){
        return -1*(a.complete - b.complete);
    }

    function makeLeaderboardObj(){
        let keys = Object.keys(props.children.progress);
        let leaderBoardInfo = [];
        for (let i = 0; i < keys.length; i++){
            let person = keys[i];
            let personObj = {};
            personObj["photo"] = props.children.photos[person];
            personObj["displayName"] = person;
            personObj["complete"] = props.children.progress[person] / total * 100;
            personObj["score"] = props.children.progress[person];
            leaderBoardInfo.push(personObj);
        }

        leaderBoardInfo.sort(sortProgress);

        for (let i = 0; i < keys.length; i++){
            leaderBoardInfo[i]["level"] = i+1;
        }
        return leaderBoardInfo;
    }

    return (
    <div id = "IssuedChallengeObj">
        <div>
        <PhotoDisplay>{{"photos": props.children.photos}}</PhotoDisplay>
        <BoxLine></BoxLine>
        <div>
            <div>
                <p>{title}</p>
                <p>{dueDate}</p>
                <button className = "challengeInformationButton" onClick = {toggleState}></button>
            </div>
            <div>
                <ProgressBar>{{"completed":percentageDone}}</ProgressBar>
                {
                    (percentageDone < 100) ?
                    <p>{myProgress}/{total}</p>
                    :
                    <p>Complete</p>
                }
            </div>
        </div>
        </div>
        {showState ? <div>
            <Line></Line>
            <Leaderboard>{{"title":"Challenge", "entries": makeLeaderboardObj()}}</Leaderboard>
        </div> :<></>}
    </div>);
}

export default IssuedChallengeObj;