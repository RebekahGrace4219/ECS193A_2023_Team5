import BoxLine from "./BoxLine";
import ProgressBar from "../Shared/ProgressBar";
import {useState} from "react";
import Line from "../Shared/Line";
import Leaderboard from "../Shared/Leaderboard";
const WeeklyChallengeObj = (props) => {
    let username = props.username;
    let myProgress = props.children.progress[props.username];
    let total = props.children.amount;
    let percentageDone = myProgress/total * 100;
    let title = props.children.exerciseType + " " + props.children.amount + " " + props.children.unit

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
            personObj["complete"] = props.children.progress[person] / total * 100;
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
            selfObj["complete"] = myProgress / total * 100;
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
    <div>
        <div>
        <div>
            <img src = "https://i.imgur.com/XkWZOEN.png"/>
            <p>Global</p>
        </div>
        <BoxLine></BoxLine>
        <div>
            <div>
                <p>{title}</p>
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
            <Leaderboard>{{"title":"Global Challenge", "entries": makeLeaderboardObj()}}</Leaderboard>
        </div> :<></>}
    </div>
    );
}

export default WeeklyChallengeObj;