import {useState, useEffect} from "react";
import axios from "axios";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const RedirectPage = (props) => {
    const [load, setLoad] = useState(false);
    let type = props.type;

    useEffect (
        () => {
            const followRequest = () => {
                let requestID = processURL();
                if (type === "Friend"){
                    sendFriendRequest(requestID);
                } else if (type === "League"){
                    sendLeagueRequest(requestID);
                }
            }

            const processURL = () => {
                let url = window.location.href;
                let id = url.split("request"+type+"?")[1];
                return id;
            }


            if(!load){
                followRequest();
                setLoad(true);
            }
        }, [load, type]
    );



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




    return (<div><h1>Request sending...</h1></div>);

}

export default RedirectPage;