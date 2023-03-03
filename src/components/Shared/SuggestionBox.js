import "../../css/Shared/suggestionBox.css";
import {useState, useEffect} from 'react';
import SuggestedFriendObj from "../Social/SuggestedFriendObj";
import SuggestedLeagueObj from "../Social/SuggestedLeagueObj";
import RecentMedalObj from "../Profile/RecentMedalObj";

const SuggestionBox= (props) => {

    let [informationType] = useState(props.children.type);
    let [informationMap, setInformationMap] = useState([]);

    function getFriendInformation(){
        // ask for top 6 friends
        // process or get information in the form of [{"DisplayName":value, "MutalFriends": value, "MutualLeagues":value, "ProfilePhoto":},...]
        setInformationMap( [
            {"DisplayName": "Shazam", "MutualFriends": 6, "MutualLeagues": 4},
            {"DisplayName": "Wonder Woman", "MutualFriends": 7, "MutualLeagues": 6},
            {"DisplayName": "Bruce Wayne", "MutualFriends": 4, "MutualLeagues": 4},
            {"DisplayName": "Alan Rickman", "MutualFriends": 8, "MutualLeagues": 2},
            {"DisplayName": "Sinead O'Connor", "MutualFriends": 1, "MutualLeagues": 1},
            {"DisplayName": "Pikachu", "MutualFriends": 2, "MutualLeagues": 0},
        ]);
    }

    function getLeagueInformation(){
        // ask for top 6 friends
        // process or get information in the form of [{"LeagueName":value, "MutualFriends":value},...]
        setInformationMap( [
            {"LeagueName": "Justice", "MutualFriends": 6},
            {"LeagueName": "Avengers", "MutualFriends": 7},
            {"LeagueName": "Free Swim", "MutualFriends": 4},
            {"LeagueName": "Weighlifting Bros", "MutualFriends": 8},
            {"LeagueName": "Lifting Weights and Friends", "MutualFriends": 1},
            {"LeagueName": "Pokemon", "MutualFriends": 2},
        ]);
    }

    function getMedalInformation(){
        // ask for top 6 friends
        // process or get information in the form of [{"Name":medalName},...]
        setInformationMap( [
            {"Name":"Run 100 miles"},
            {"Name":"Swim 100 miles"},
            {"Name":"Walk 100 miles"},
            {"Name":"Run 250 miles"},
            {"Name":"100 burpees"},
            {"Name":"Try a new sport!"},

        ]);
    }
    useEffect(
        () => {
          if (informationType === "friend") {
            getFriendInformation();
          } else if(informationType === "league"){
            getLeagueInformation();
          } else if (informationType === "medal"){
            getMedalInformation();
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