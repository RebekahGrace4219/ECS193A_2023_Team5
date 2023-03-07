import PhotoDisplay from "./PhotoDisplay";
import BoxLine from "./BoxLine";
import ProgressBar from "../Shared/ProgressBar";
import {useState, useEffect} from "react";
import Line from "../Shared/Line";
import Leaderboard from "../Shared/Leaderboard";
import "../../css/Challenge/ChallengeObj.css";
import "../../css/Shared/button.css";

const IssuedChallengeObj = (props) => {
    let myProgress = props.children.progress.progress;
    let total = props.children.progress.exercise.amount;
    let percentageDone = myProgress/total * 100;
    let title = props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit
    let dueDate = props.children.dueDate.split("T")[0];

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
    <div id = "issuedChallengeObj" className = "completeChallengeBox">
        <div className = "challengeBox">
        <div className="photoDiv">
        <PhotoDisplay photos = {props.children.pictures}></PhotoDisplay><BoxLine></BoxLine>
        </div>
        <div className = "challengeMiddle">
            <div className = "challengeInnerMiddle">
                <p className="challengeText">{title}</p>
                <p className="challengeText">{dueDate}</p>

            </div>
            <div className = "challengeInnerMiddle">
                <ProgressBar>{{"completed":percentageDone}}</ProgressBar>
            </div>
        </div>

        <div className = "challengeEnd">
            <button className = "challengeDropButton" onClick = {toggleState}>
                <img src = "https://i.imgur.com/DiUB6gk.png" alt = "expandButton"/>
            </button>
            {
                (percentageDone < 100) ?
                <p className = "challengeInnerEnd">{myProgress}/{total}</p>
                :
                <p className = "challengeInnerEnd">Complete</p>
            }
        </div>

        </div>
        {showState ?
            <div className = "leaderboardSection">
                <Line></Line>
                <Leaderboard>{{"title":"Challenge", "entries": makeLeaderboardObj()}}</Leaderboard>
            </div>
            :
            <></>
        }
    </div>
    );
}

export default IssuedChallengeObj;