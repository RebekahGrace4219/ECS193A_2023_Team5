import LeagueObj from './LeagueObj';
import {useState,useEffect} from 'react';
import axios from 'axios';
import "../../css/Social/scroll.css";
const backend_url = process.env.REACT_APP_PROD_BACKEND;

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
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });     }

    function getAdmin(){
        // get Received
        var config = {
          method : 'post',
          url : backend_url + 'league/get_admin_leagues_with_challenge_count',
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
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
      }

      function getInvite(){
        var config = {
            method : 'post',
            url : backend_url + 'league/get_invited_leagues',
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
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
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
            else if(scrollType === "invite"){
                getInvite();
            }
        }, [scrollType]
    );

    return(
        <div className = "scroll">
            {information.map(makeLeagueObj)}
        </div>
    )
}

export default LeagueScroll;