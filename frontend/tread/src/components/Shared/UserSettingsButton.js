import {useState} from 'react';
import "../../css/Shared/userSettingsButton.css"

const UserSettingsButton = () => {

    const [displayName] = useState(getDisplayName());
    const [username] = useState(getUsername());

    function logoutDropDown(){

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
    return (
        <div id = "UserSettingsButton" >
            <button id = "UserSettingsLeft" onClick={moveProfilePage}>
                <div>
                    <img id = "UserSettingButtonProfileImage" src = "https://i.imgur.com/7vaxEiJ.png"/>
                </div>
                <div id = "userSettingNaming">
                    <p id ="userSettingDisplayName">{displayName}</p>
                    <p id ="userSettingUsername">{username}</p>
                </div>
            </button>
            <div id = "userSettingButtonSection">
                <button className = "dropDownButton" onClick = {logoutDropDown}><img src = "https://i.imgur.com/B5Dnylx.png"/></button>

            </div>
        </div>
    );
}


export default UserSettingsButton;