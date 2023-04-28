import {useState, useEffect} from 'react';
import SuggestedFriendObj from "../Social/SuggestedFriendObj";
import SuggestedLeagueObj from "../Social/SuggestedLeagueObj";
import axios from "axios";

import "../../css/Shared/suggestionBox.css";

const backend_url = process.env.REACT_APP_PROD_BACKEND

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
            console.log("Recommended friends is, ", response.data);
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error);
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
            console.log(response.data);
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
            setInformationMap(response.data)
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
                    <h2>Suggested Friends</h2>
                    <div className = "suggestionBoxInformation">
                        {informationMap.map((info) => {return (<SuggestedFriendObj username = {info[0]} mutualFriends = {info[1]}/>);})}
                    </div>
                </div>
                :
                <></>
            }
            {
                (informationType === "league") ?

                <div>
                    <h2>Suggested Leagues</h2>
                    <div className = "suggestionBoxInformation">
                    {informationMap.map((info) => {return (<SuggestedLeagueObj leagueName = {info["leagueName"]} leagueID = {info["_id"]}/>);})}
                    </div>
                </div>
                :
                <></>
            }

        </div>
    );
}


export default SuggestionBox;