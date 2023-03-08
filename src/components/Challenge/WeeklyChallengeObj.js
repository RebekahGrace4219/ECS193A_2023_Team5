import BoxLine from "./BoxLine";
import ProgressBar from "../Shared/ProgressBar";
import {useState, useEffect} from "react";
import Line from "../Shared/Line";
import Leaderboard from "../Shared/Leaderboard";
import axios from "axios";
import "../../css/Challenge/ChallengeObj.css";
// const backend_url = process.env.REACT_APP_PROD_BACKEND
const backend_url = process.env.REACT_APP_DEV_BACKEND


const WeeklyChallengeObj = (props) => {
    let myProgress = props.children.progress;
    let total = props.children.exercise.amount;
    let percentageDone = myProgress/total * 100;
    let title = props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit
    let challengeID = props.children._id;
    const [showState, setState] = useState(false);
    const [leaderboardInfo, setLeaderboardInfo] = useState([]);

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

    function toggleState(){
        setState(!showState);
    }

    function getLeaderboard(){
        var config = {
            method : 'post',
            url : backend_url + 'global_challenge/get_leaderboard',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                challengeID: challengeID
            }
        };
        axios(config)
        .then(function(response){
            //setLeaderboardInfo(response.data.map(makeLeaderboardObj));
            console.log("response",
                response.data
            );
            //console.log("Item sends: ", response.data.map(makeLeaderboardObj));
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function makeLeaderboardObj(item, index){
        console.log(item, index);
        let entry = {}
        entry["level"] = index + 1;
        entry["photo"] = item["pictures"];
        entry["name"] = item["username"];
        entry["complete"] = item["progress"]/total * 100;
        entry["score"] = item["progress"]
        return entry;
    }

    useEffect (
        () => {
            if(showState){
                getLeaderboard();
            }
        }, [showState]
    );

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
    </div>
    );
    /** </div>
        {showState ? <div>
            <Line></Line>
            <Leaderboard>{{"title":"Global Challenge", "entries": makeLeaderboardObj()}}</Leaderboard>
        </div> :<></>}*/
}

export default WeeklyChallengeObj;