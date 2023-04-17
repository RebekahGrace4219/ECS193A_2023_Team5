import {useState, useEffect} from "react";
import axios from "axios";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const RedirectPage = (props) => {
    const [load, setLoad] = useState(false);
    let type = props.type;


    const processURL = () => {
        let url = window.location.href;
        let id = url.split("request"+type+"?")[1];
        return id;
    }


    async function sendFriendRequest(requestID){
        console.log("sent friend request");
        var config = {
            method : 'post',
            url : backend_url + 'friend_list/send_friend_request',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              friendName : requestID
            },
            withCredentials: true,
            credentials: 'include'
          };
          axios(config)
          .then(function(response) {
            console.log("sent request succesffully");
            window.location.href = "/socialFriendPage";
          })
          .catch(function(error){
            console.log("could not send request");
              console.log(error)
              console.log("Not Logged in");
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
            else{
                window.location.href = "./currentChallengePage";
            }
          });
    }

    const sendLeagueRequest = (requestID) => {

        var config  = {
            method : 'post',
            url: backend_url+'league/user_request_to_join',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data:{
                leagueID: requestID
            }
        };
        axios(config)
        .then(function(response) {
            window.location.href = "./socialLeaguePage";
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
            else{
                window.location.href = "./currentChallengePage";
            }
        });

    }

    const followRequest = () => {
        // Grab the url
        // parse out the instruction
        // send the right post request
        console.log("Followed request");
        let requestID = processURL();
        console.log("Requested id is , ", requestID);
        if (type === "Friend"){
            sendFriendRequest(requestID);
        } else if (type === "League"){
            sendLeagueRequest(requestID);
        }

    }
    useEffect (
        () => {
            if(!load){
                followRequest();

            }
        }, [load]
    );

    return (<div><h1>If you can see this you have a request that was incorrectly sent!</h1>
    </div>);

}

export default RedirectPage;