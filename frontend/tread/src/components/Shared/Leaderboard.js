import ProgressBar from "./ProgressBar";
import {useState} from 'react';
const LeaderboardChallengeObj = (props) => {
    return (<div>
        <div id = "medalImage">
            {
                (props.children.index <3) ?<img></img>:<p>Not top 3</p>
            }
        </div>
        <div>
            <img></img>
            <p>{props.children.person}</p>
            <ProgressBar>10</ProgressBar>
            <img></img>
            <p>{props.children.score}</p>
        </div>
    </div>);
}

const LeaderboardChallenge = (props) => {
    function convertChallengeObj(people){

        let key_list = Object.keys(people);
        let people_list= [];
        for(let i = 0; i < key_list.length; i++){
            let key = key_list[i];
            let new_obj = {"index":i, "score":people[key_list[i]], "person" : key_list[i]};
            people_list.push(new_obj);
        }

        return people_list;
    }

    function ConvertChallengeObjFinal(input){
        return (<LeaderboardChallengeObj>{input}</LeaderboardChallengeObj>);
    }
    const [sss] = useState(convertChallengeObj(props.children.progress));
    console.log(props.children.progress);
    console.log(sss);
    return (
        <div>
            <h2>Progress Leaderboard</h2>
                {sss.map(ConvertChallengeObjFinal)}
        </div>
    );
}

export default LeaderboardChallenge