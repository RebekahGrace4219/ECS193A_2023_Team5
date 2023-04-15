import "../../css/Shared/suggestionBox.css";
import axios from "axios";
const backend_url = process.env.REACT_APP_PROD_BACKEND;
const SuggestedFriendObj = (props) => {
    async function sendFriendRequest(){

        var config = {
            method : 'post',
            url : backend_url + 'friend_list/send_friend_request',
            headers: {
              Accept: 'application/json',
            },
            data :
            {
              friendName : props.username
            },
            withCredentials: true,
            credentials: 'include'
          };
          axios(config)
          .then(function(response) {
          })
          .catch(function(error){
              console.log(error)
              console.log("No response")
              if(error.response.status===401){
                window.location.href = "/loginPage";
            }
          });
    }

    return (
        <div className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = {props.picture}/>
            </div>
            <div className = "suggestionWritingSection">
                <div  className = "suggestionHeaderStyle">{props.username}</div>
                <div  className = "suggestionTextStyle">{props.mutualFriends} Mutual Friend(s)</div>
                <button className = "submitButton" onClick = {sendFriendRequest}><p className = "submitButtonText"> Add Friend</p></button>
            </div>
        </div>
    );
}


export default SuggestedFriendObj;