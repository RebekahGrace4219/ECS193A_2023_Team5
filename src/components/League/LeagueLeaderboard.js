import LeagueLeaderboardEntry from "./LeagueLeaderboardEntry";
import {useState, useEffect} from "react";
import {setDisplayProperty} from "../../Helpers/CssEffects";
import axios from 'axios';

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const LeagueLeaderboard = (props) => {
    let leagueID = props.children.id;
    console.log("LeagueId is", leagueID);
    const [leaderboardInfo, setLeaderboardInfo] = useState([]);
    const [load, setLoad] = useState(false);

    function getLeaderboardInfo(){
        var config ={
            method: 'post',
            url : backend_url+'league/get_leaderboard',
            headers: {
                Accept: 'application/json',
              },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: leagueID
            }
          };
          axios(config)
          .then(function(response){
            let information_list = response.data;

            for(let i = 0; i< information_list.length; i++){
                information_list[i]["level"] = i+1;
            }
            console.log(information_list);
            setLeaderboardInfo(information_list);
          })
          .catch(function(error){
              console.log(error);
              console.log("No response");
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
          });
    }
    useEffect(
        () => {
          if (!load) {
            getLeaderboardInfo();
            setLoad(true);

          }
        }, [load]
      );

      useEffect(
        () => {
          if (leaderboardInfo.length === 0) {
            setDisplayProperty("Leaderboard", "none")
          }
          else if(leaderboardInfo){
            setDisplayProperty("Leaderboard", "block")
          }
        }, [leaderboardInfo]
      );


    // Send out the request
    // set the information to map
    function makeLeaderboardEntryObj(input){
        return (<LeagueLeaderboardEntry>{input}</LeagueLeaderboardEntry>)
    }
    return(
        <div id = "Leaderboard">
            <h2>League Leaderboard</h2>

            <div>
                {leaderboardInfo.map(makeLeaderboardEntryObj)}
            </div>
        </div>

    );

}

export default LeagueLeaderboard;