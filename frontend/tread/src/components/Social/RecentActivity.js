import {useState, useEffect} from 'react';
import ActivityObj from './ActivityObj';
const RecentActivity = (props) => {
    const [activityInfo, setActivityInfo] = useState([]);
    const [activityType] = useState(props.children.type);

    function getRecentActivityFriend(){
        //TODO
        setActivityInfo(
            [{"displayName": "Jonah Jameson", "challengeType": "Personal", "challengeTitle": "Do 50 push ups", "time": "1h", "type": "progress"},
            {"displayName": "Ash Ketchum", "challengeType": "League", "challengeTitle": "Swim 4 km", "time": "2d", "type":"progress"},
            {"displayName": "Elle Woods", "challengeType": "Global", "challengeTitle": "Run 10 miles", "time": "3d", "type":"complete"}
            ]);
    }

    function getRecentActivityLeague(){
        //TODO
        setActivityInfo(
            [{"displayName": "Jonah Jameson", "challengeType": "Personal", "challengeTitle": "Do 50 push ups", "time": "1h", "type": "progress"},
            {"displayName": "Ash Ketchum", "challengeType": "League", "challengeTitle": "Swim 4 km", "time": "2d", "type":"progress"},
            {"displayName": "Elle Woods", "challengeType": "Global", "challengeTitle": "Run 10 miles", "time": "3d", "type":"complete"}
            ]);
    }

    function createActivityObj(input){
        return (
        <ActivityObj>
            {input}
        </ActivityObj>);
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