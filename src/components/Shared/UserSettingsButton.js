import {useState, useEffect} from 'react';
import "../../css/Shared/userSettingsButton.css"

const UserSettingsButton = () => {

    const [displayName] = useState(getDisplayName());
    const [username] = useState(getUsername());
    const [profilePhoto] = useState(getPhoto())
    const [logoutDisplay, setLogoutDisplay] = useState(false);
    const [decisionState, setDecisionState] = useState("");

    function logout(){
        //TODO
    }

    function stopLogoutDisplay(){
        setLogoutDisplay(false);
    }

    function toggleLogoutDisplay(){
        setLogoutDisplay(!logoutDisplay);
    }
    function moveProfilePage(){
        window.location.href = "./profileStatsPage"
    }

    function getDisplayName(){
        return "Rebekah Grace";
    }

    function getUsername(){
        return "BronzeTiger#4557";
    }

    function getPhoto(){
        return "";
    }

    function movePage(event){
        setDecisionState(event.target.value);
    }

    useEffect(
        () => {
          if (decisionState === "Profile") {
            moveProfilePage();
            stopLogoutDisplay();
          }
          else if (decisionState === "Logout"){
            logout();
            stopLogoutDisplay();
          }
        }, [ decisionState]
      );
    return (
        <div id = "UserSettingsButton" >
            <button id = "UserSettingsLeft" onClick={moveProfilePage}>
                <div>
                    <img id = "UserSettingButtonProfileImage" src = {profilePhoto}/>
                </div>
                <div id = "userSettingNaming">
                    <p id ="userSettingDisplayName">{displayName}</p>
                    <p id ="userSettingUsername">{username}</p>
                </div>
            </button>
            <div id = "userSettingButtonSection">
                <button className = "dropDownButton" onClick = {toggleLogoutDisplay}><img src = "https://i.imgur.com/B5Dnylx.png"/></button>
                {
                    logoutDisplay ?
                    <select id = "LogoutSelect" onChange={movePage}>
                        <option value = ""></option>
                        <option value = "Profile">Profile</option>
                        <option value = "Logout">Logout</option>
                    </select>
                    : <></>
                }

            </div>
        </div>
    );
}


export default UserSettingsButton;