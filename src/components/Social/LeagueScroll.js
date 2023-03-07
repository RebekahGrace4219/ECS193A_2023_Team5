import LeagueObj from './LeagueObj';
import {useState,useEffect} from 'react';
import axios from 'axios';

const backend_url = process.env.REACT_APP_DEV_BACKEND

const LeagueScroll = (props) => {
    let [scrollType] = useState(props.type);
    let [information, setInformation] = useState([]);

    function getAll(){
        // get Friends
        // get Friends
        var config = {
          method : 'post',
          url : backend_url + 'league/get_leagues',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });  
    }

    function getSent(){
        // get Sents
        var config = {
          method : 'post',
          url : backend_url + 'league/get_requested_leagues',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });     }

    function getAdmin(){
        // get Received
        var config = {
          method : 'post',
          url : backend_url + 'league/get_admin_league_info',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        }); 
      }

    function getOwner(){
        // get Blocked
        var config = {
          method : 'post',
          url : backend_url + 'league/get_owned_leagues',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            console.log(response.data)
            setInformation(response.data)
        })
        .catch(function(error){
            console.log(error)
            console.log("No response")
        });     
      }

    function makeLeagueObj(input){
        return (<LeagueObj type = {scrollType}>{input}</LeagueObj>);
    }

    useEffect (
        () => {
            if(scrollType === "league"){
                getAll();
            }
            else if(scrollType === "sent"){
                getSent();
            }
            else if(scrollType === "admin"){
                getAdmin();
            }
            else if(scrollType === "owner"){
                getOwner();
            }
        }, [scrollType]
    );

    return(
        <div id = "LeagueScroll">
            {information.map(makeLeagueObj)}
        </div>
    )
}

export default LeagueScroll;