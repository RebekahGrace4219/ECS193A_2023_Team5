import React, {useState} from 'react';

import Leaderboard from '../components/Shared/Leaderboard';
import "../css/Shared/page3.css"

const TestDiv = () => {
    let total = 100;
    let props = {"children":{"progress":{"Bruce Wayne":10, "Diana Prince":40, "Clark Kent":60},
    "exerciseType":"Run",
    "unit":"km",
    "amount":100,
    "dueDate":"2023-03-10",
    "username":"Bruce Wayne",
    "photos":{
        "Bruce Wayne": "https://i.imgur.com/E2x8xyY.png",
        "Clark Kent": "https://i.imgur.com/q3vP5BH.png",
        "Diana Prince":"https://i.imgur.com/3Ia9gVG.png"},
    "sentUser": "Clark Kent",
    "receivedUser": "Justice League",
    "type": "league"}};

    function sortProgress(a, b){
        return -1*(a.complete - b.complete);
    }

    function min(a,b){
        if (a<b){
            return a;
        }
        return b;
    }
    function makeLeaderboardObj(){
        let keys = Object.keys(props.children.progress);
        let leaderBoardInfo = [];
        for (let i = 0; i < keys.length; i++){
            let person = keys[i];
            let personObj = {};
            personObj["photo"] = props.children.photos[person];
            personObj["displayName"] = person;
            personObj["complete"] = min(100, props.children.progress[person] / total * 100);
            personObj["score"] = props.children.progress[person];
            leaderBoardInfo.push(personObj);
        }

        leaderBoardInfo.sort(sortProgress);

        for (let i = 0; i < keys.length; i++){
            leaderBoardInfo[i]["level"] = i+1;
        }
        return leaderBoardInfo;
    }

    return(
        <div id = "test">
            <Leaderboard>{{"title":"Challenge", "entries": makeLeaderboardObj()}}</Leaderboard>
        </div>
    );
}

export default TestDiv;