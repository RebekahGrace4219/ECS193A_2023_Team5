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
            window.location.href = "/socialFriendPage";
          })
          .catch(function(error){
              console.log(error)
              console.log("Not Logged in");
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
          });
    }

    const sendLeagueRequest = () => {

    }

    const followRequest = () => {
        // Grab the url
        // parse out the instruction
        // send the right post request

        let requestID = processURL();

        /*if ("type" === "friend"){
            sendFriendRequest(requestID);
        } else if ("type" === "league"){
            sendLeagueRequest(requestID);
        }*/

    }
    useEffect (
        () => {
            if(!load){
                followRequest();

            }
        }, [load]
    );

    return (<div>
    </div>);

}

export default RedirectPage;