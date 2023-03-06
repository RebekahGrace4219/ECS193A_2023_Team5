import {useState, useEffect} from 'react';
import ActivityObj from './ActivityObj';

import "../../css/Social/recentActivity.css";
const RecentActivity = (props) => {
    const [activityInfo, setActivityInfo] = useState([]);
    const [activityType] = useState(props.children.type);

    function getRecentActivityFriend(){
        //TODO
        setActivityInfo(
            [{"photo":"https://i.imgur.com/3Ia9gVG.png","displayName": "Jonah Jameson", "challengeType": "Personal", "challengeTitle": "Do 50 push ups", "time": "1h", "type": "progress"},
            {"photo":"https://i.imgur.com/3Ia9gVG.png","displayName": "Ash Ketchum", "challengeType": "League", "challengeTitle": "Swim 4 km", "time": "2d", "type":"progress"},
            {"photo":"https://i.imgur.com/3Ia9gVG.png","displayName": "Elle Woods", "challengeType": "Global", "challengeTitle": "Run 10 miles", "time": "3d", "type":"complete"}
            ]);
    }

    function getRecentActivityLeague(){
        //TODO
        setActivityInfo(
            [{"photo":"https://i.imgur.com/3Ia9gVG.png","displayName": "Jonah Jameson", "challengeType": "Personal", "challengeTitle": "Do 50 push ups", "time": "1h", "type": "progress"},
            {"photo":"https://i.imgur.com/3Ia9gVG.png","displayName": "Ash Ketchum", "challengeType": "League", "challengeTitle": "Swim 4 km", "time": "2d", "type":"progress"},
            {"photo":"https://i.imgur.com/3Ia9gVG.png","displayName": "Elle Woods", "challengeType": "Global", "challengeTitle": "Run 10 miles", "time": "3d", "type":"complete"}
            ]);
    }

    function createActivityObj(input, index){
        if(index === 0){
            return (<div>
                <ActivityObj>
                    {input}
                </ActivityObj></div>);
        }
        else{
            return (
                <div>
                <div className = "topLine"></div>
                <ActivityObj>
                    {input}
                </ActivityObj></div>);
        }

    }

    useEffect(
        () => {
          if (activityType === "friend") {
            getRecentActivityFriend();
          }
          else if(activityType === "league"){
            getRecentActivityLeague();
          }
        }, [activityType]
      );
    return (
    <div id = "RecentActivity">
        {
            (activityType === "friend") ?
            <h2>Recent Friend Activity</h2>
            :
            <h2>Recent League Activity</h2>
        }
        <div id = "ActivityBox">
            {activityInfo.map(createActivityObj)}
        </div>
    </div>);
}

export default RecentActivity;