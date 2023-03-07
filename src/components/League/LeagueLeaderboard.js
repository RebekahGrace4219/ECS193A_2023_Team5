import {useState} from 'react';
import LeaderBoard from '../Shared/Leaderboard';

const LeagueLeaderboard = (props) => {
/*    const [id] = useState(props.children.id);
    const [leagueProgress] = useState(getProgress());
    const [leaguePhotos] = useState(getPhotos());

    function getProgress(){

    }

    function getPhotos(){

    }

    function getNumberChallengesAltogether(){

    }

    function makeLeaderboardObj(){
        let keys = Object.keys(leagueProgress);
        let leaderBoardInfo = [];
        for (let i = 0; i < keys.length; i++){
            let person = keys[i];
            let personObj = {};
            personObj["photo"] = leaguePhotos[person];
            personObj["displayName"] = person;
            personObj["complete"] = leagueProgress[person] / total * 100;
            personObj["score"] = leagueProgress[person];
            leaderBoardInfo.push(personObj);
        }

        leaderBoardInfo.sort(sortProgress);

        for (let i = 0; i < keys.length; i++){
            leaderBoardInfo[i]["level"] = i+1;
        }
        return leaderBoardInfo;
    }
<div>
    <Leaderboard>{{"title":"League Leaderboard", "entries": makeLeaderboardObj()}}</Leaderboard>
</div>*/
return(
<div></div>
);

}

export default LeagueLeaderboard;