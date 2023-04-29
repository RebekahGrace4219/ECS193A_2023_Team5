import axios from "axios";

import '../../css/Shared/button.css';
import { setDisplayProperty } from "../../Helpers/CssEffects";
const backend_url = process.env.REACT_APP_PROD_BACKEND;

const AcceptChallengeButton = (props) => {
    function onAccept(){
        var config  = {
            method : 'post',
            url: backend_url+'challenges/accept_friend_challenge',
            headers: {
                Accept: 'application/json',
              },
            withCredentials: true,
            credentials: 'include',
            data:    {
                challengeID: props.id
            }
        };
        axios(config)
        .then(function(response) {
            setDisplayProperty("ReceivedChallengedObj"+props.id, "none");
        })
        .catch(function(error){
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
            console.log(error)
        });
    }

    return(
        <button id = {"AcceptButton"+props.id} className = "circleButton" onClick = {onAccept}>
            <img className = "circleButtonInner" src ="https://i.imgur.com/w1FwIdu.png"/>
        </button>
    );
}

export default AcceptChallengeButton;