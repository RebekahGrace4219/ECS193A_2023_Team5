import React, {useState} from 'react';
import PageSwitch from "../Shared/PageSwitch";
import "../../css/Profile/profileHeader.css";
import "../../css/Shared/header.css";

const ProfileHeader = () => {

    function getDisplayName(){
        // GET from db
        return "Rebekah Grace";
    }

    function getUsername(){
        // Get from db
        return "@BronzeTiger#4567";
    }

    function getProfilePhoto(){
        // get from db
        return "https://i.imgur.com/2BMQKKi.png";
    }


    const [displayName] = useState(getDisplayName());
    const [username] = useState(getUsername());
    const [profilePhoto] = useState(getProfilePhoto());


    return (
        <div id = "ProfileHeader">
            <div>
                <h1>Profile</h1>
                <PageSwitch type = "profile"></PageSwitch>
            </div>
            <div>
                <div>
                    <img src = {profilePhoto} alt = "profile"/>
                </div>
                <div>
                    <h1>{displayName}</h1>
                    <h3>{username}</h3>
                </div>
                <div>
                    <h3>Add code</h3>
                    <img src = "https://i.imgur.com/rpi5EL2.png"/>
                </div>
            </div>

        </div>
    );
}


export default ProfileHeader;