import "../../css/Shared/suggestionBox.css";
import {useState, useEffect} from 'react';
import SuggestedFriendObj from "../Social/SuggestedFriendObj";
import SuggestedLeagueObj from "../Social/SuggestedLeagueObj";
import RecentMedalObj from "../Profile/RecentMedalObj";
import axios from "axios";


const backend_url = process.env.REACT_APP_DEV_BACKEND

const SuggestionBox= (props) => {

    let [informationType] = useState(props.children.type);
    let [informationMap, setInformationMap] = useState([]);

    function getRecommendedFriends(){
        // process or get information in the form of [{"DisplayName":value, "MutalFriends": value, "MutualLeagues":value, "ProfilePhoto":},...]

        var config = {
            method : 'post',
            url : backend_url + 'friend_list/get_recommended',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            console.log("informationMAp", response.data);
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function getRecommendedLeagues(){
        // process or get information in the form of [{"LeagueName":value, "MutualFriends":value},...]

        var config = {
            method : 'post',
            url : backend_url + 'league/get_recommended',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
        });
    }

    function getRecentMedals(){
        // process or get information in the form of [{"Name":medalName},...]


        var config = {
            method : 'post',
            url : backend_url + 'medals/get_recently_earned',
            headers: {
            Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
        };
        axios(config)
        .then(function(response){
            console.log("recently earned");
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
        });
    }
    useEffect(
        () => {
          if (informationType === "friend") {
            getRecommendedFriends();
          } else if(informationType === "league"){
            getRecommendedLeagues();
          } else if (informationType === "medal"){
            getRecentMedals();
          }
        },[informationType]
      );

    return (
        <div id = "SuggestionBox">
            {
                (informationType === "friend") ?
                <div>
                    <p className = "SuggestionBoxTitle">Suggested Friends</p>
                    <div>
                        {informationMap.map((info) => {return (<SuggestedFriendObj displayName = {info["DisplayName"]} mutualFriends = {info["MutualFriends"]} mutualLeagues = {info["MutualLeagues"]}/>);})}
                    </div>
                </div>
                :
                <></>
            }
            {
                (informationType === "league") ?
                <div>
                    <p className = "SuggestionBoxTitle">Suggested Leagues</p>
                    <div>
                    {informationMap.map((info) => {return (<SuggestedLeagueObj leagueName = {info["LeagueName"]} mutualFriends = {info["MutualFriends"]}/>);})}
                    </div>
                </div>
                :
                <></>
            }
            {
                (informationType === "medal") ?
                <div>
                    <p className = "SuggestionBoxTitle">Recent Medals</p>
                    <div>
                        {informationMap.map((info) => {return (<RecentMedalObj name = {info["Name"]}></RecentMedalObj>);})}
                    </div>
                </div>
                :
                <></>
            }

        </div>
    );
}


export default SuggestionBox;