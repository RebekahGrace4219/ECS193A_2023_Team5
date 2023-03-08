import PhotoDisplay from "./PhotoDisplay";
import BoxLine from "./BoxLine";
import ProgressBar from "../Shared/ProgressBar";
import {useState, useEffect} from "react";
import Line from "../Shared/Line";
import Leaderboard from "../Shared/Leaderboard";
import "../../css/Challenge/ChallengeObj.css";
import "../../css/Shared/button.css";
import axios from "axios";

// const backend_url = process.env.REACT_APP_PROD_BACKEND
const backend_url = process.env.REACT_APP_DEV_BACKEND
const IssuedChallengeObj = (props) => {
    let myProgress = props.children.progress.progress;
    let total = props.children.progress.exercise.amount;
    let percentageDone = myProgress/total * 100;
    let title = props.children.exercise.exerciseName + " " + props.children.exercise.amount + " " + props.children.exercise.unit
    let dueDate = props.children.dueDate.split("T")[0];
    let challengeID = props.children._id;

    const [leaderboardInfo, setLeaderboardInfo] = useState([]);

    const [showState, setState] = useState(false);
    function toggleState(){
        setState(!showState);
    }

    function getLeaderboard(){
        var config = {
            method : 'post',
            url : backend_url + 'challenges/get_challenge_leaderboard',
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
            setLeaderboardInfo(response.data.map(makeLeaderboardObj));
            console.log("Item sends: ", leaderboardInfo);
        })
        .catch(function(error){
            console.log(error)
        });
    }


    useEffect (
        () => {
            if(showState){
                getLeaderboard();
            }
        }, [showState]
    );

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
                <Leaderboard>{{"title":"Challenge", "entries": {leaderboardInfo}}}</Leaderboard>
            </div>
            :
            <></>
        }
    </div>
    );
}

export default IssuedChallengeObj;