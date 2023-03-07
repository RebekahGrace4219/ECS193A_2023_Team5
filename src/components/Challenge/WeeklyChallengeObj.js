import BoxLine from "./BoxLine";
import ProgressBar from "../Shared/ProgressBar";
import {useState} from "react";
import Line from "../Shared/Line";
import Leaderboard from "../Shared/Leaderboard";

import "../../css/Challenge/ChallengeObj.css";
const WeeklyChallengeObj = (props) => {
    let username = props.username;
    let myProgress = props.children.progress.progress;
    let total = props.children.progress.exercise.amount;
    let percentageDone = myProgress/total * 100;
    let title = props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit



    function sortProgress(a, b){
        return -1*(a.complete - b.complete);
    }

    function max(a, b){
        if (a>b){
            return a;
        }
        return b;
    }

    function min(a, b){
        if (a<b){
            return a;
        }
        return b;
    }
    function makeLeaderboardObj(){
        let keys = Object.keys(props.children.progress);
        let leaderBoardInfo = [];
        for (let i = 0; i < max(keys.length,5); i++){
            let person = keys[i];
            let personObj = {};
            personObj["photo"] = props.children.photos[person];
            personObj["displayName"] = person;
            personObj["complete"] = min(props.children.progress[person] / total * 100,100);
            personObj["score"] = props.children.progress[person];
            leaderBoardInfo.push(personObj);
        }

        leaderBoardInfo.sort(sortProgress);

        for (let i = 0; i < keys.length; i++){
            leaderBoardInfo[i]["level"] = i+1;
        }

        if(!props.children.top5){
            let selfObj = {};
            selfObj["photo"] = props.children.self["photo"];
            selfObj["displayName"] = username;
            selfObj["complete"] = min(myProgress / total * 100, 100);
            selfObj["score"] = myProgress;
            selfObj["level"] = min(keys.length,6);
            leaderBoardInfo.push(selfObj);
        }

        return leaderBoardInfo;
    }
    const [showState, setState] = useState(false);
    function toggleState(){
        setState(!showState);
    }


    return (
    <div className = "completeChallengeBox">
        <div className = "challengeBox">
        <div className="photoDiv">
            <div className="weeklyPhotoDiv">
                <img className = "innerWeeklyPhotoDiv" src = "https://i.imgur.com/XkWZOEN.png"/>
                <p className = "innerWeeklyPhotoDiv challengeText">Global</p>
            </div>
            <BoxLine></BoxLine>
        </div>

        <div className = "challengeMiddle">
            <div className = "challengeInnerMiddle">
                <p className="challengeText">{title}</p>

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
        {showState ? <div>
            <Line></Line>
            <Leaderboard>{{"title":"Global Challenge", "entries": makeLeaderboardObj()}}</Leaderboard>
        </div> :<></>}
    </div>
    );
}

export default WeeklyChallengeObj;