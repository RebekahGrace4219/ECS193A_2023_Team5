import "../../css/Shared/suggestionBox.css";
import {createLeaguePictureURL} from "../../Helpers/CloudinaryURLHelpers";

import axios from 'axios';
const backend_url = process.env.REACT_APP_PROD_BACKEND
const SuggestedLeagueObj = (props) => {
    let leagueID = props.leagueID;

    const requestJoinLeague = () => {
    var config  = {
        method : 'post',
        url: backend_url+'league/user_request_to_join',
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
    .then(function(response) {
    })
    .catch(function(error){
        console.log(error)
        if(error.response.status===401){
            window.location.href = "/loginPage";
        }
    });
    }

    return(
        <div id = "SuggestedLeagueObj" className="suggestionObj">
            <div className = "suggestionImageSection">
                <img className = "suggestionImage" src = {createLeaguePictureURL(leagueID)}/>
            </div>
            <div className = "suggestionWritingSection">
                <p  className = "suggestionHeaderStyle" >{props.leagueName}</p>
                <button className="submitButton" onClick= {requestJoinLeague} ><p className="submitButtonText">Join</p></button>
            </div>
        </div>
    )
}


export default SuggestedLeagueObj;