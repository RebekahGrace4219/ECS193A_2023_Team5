import {useState, useEffect} from 'react';
import ActivityObj from './ActivityObj';
import axios from "axios";
import "../../css/Social/recentActivity.css";
import {setDisplayProperty} from "../../Helpers/CssEffects";
const backend_url = process.env.REACT_APP_PROD_BACKEND;

const RecentActivity = (props) => {
    const [activityInfo, setActivityInfo] = useState([]);
    const [activityType] = useState(props.children.type);

    function getRecentActivityFriend(){
        var config = {
            method : 'post',
            url : backend_url + 'friend_list/get_recent_activity',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            console.log("The recent activity friend looks like: ", response.data);
            setActivityInfo(response.data)
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
    }

    function getRecentActivityLeague(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_recent_activity',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            console.log("The recent activity league looks like: ", response.data);
            setActivityInfo(response.data)
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
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
          if (activityInfo.length === 0) {
            setDisplayProperty("RecentActivity", "none")
          }
          else if(activityInfo){
            setDisplayProperty("RecentActivity", "block")
          }
        }, [activityInfo]
      );

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