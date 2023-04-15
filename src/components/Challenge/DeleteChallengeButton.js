import axios from "axios";

import '../../css/Shared/button.css';

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const DeleteChallengeButton = (props) => {
    function onDelete(){
        var config  = {
            method : 'post',
            url: backend_url+'challenges/delete_friend_challenge',
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
            return response.data;
        })
        .catch(function(error){
            console.log(error)
            if(error.response.status===401){
                window.location.href = "/loginPage";
            }
        });
    }

    return(
        <button id = "DeleteButton" className = "circleButton" onClick = {onDelete}>
            <img className = "circleButtonInner" src ="https://i.imgur.com/WgGT2MJ.png"/>
        </button>
    );
}

export default DeleteChallengeButton;