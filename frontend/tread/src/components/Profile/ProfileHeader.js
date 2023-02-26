import "../../css/Profile/profileHeader.css"
import React, {useState} from 'react';

const ProfileHeader = () => {


    function getName(){
        return "Rebekah Grace";
    }

    function getUsername(){
        return "@BronzeTiger#4567";
    }

    function getProfilePhoto(){
        return "https://i.imgur.com/2BMQKKi.png";
    }


    function getNumberLeagues(){
        let number = 0;
        let stringResponse = "0";

        if (number >= 10){
            stringResponse = "9+";
        }
        else{
            stringResponse = number.toString();
        }

        return stringResponse;
    }

    function getNumberFriends(){
        let number = 3;
        let stringResponse = "0";

        if (number >= 10){
            stringResponse = "9+";
        }
        else{
            stringResponse = number.toString();
        }

        return stringResponse;
    }

    function getNumberMedals(){
        let number = 0;
        let stringResponse = "0";

        if (number >= 10){
            stringResponse = "9+";
        }
        else{
            stringResponse = number.toString();
        }

        return stringResponse;
    }

    const [name, setName] = useState(getName());
    const [username, setUsername] = useState(getUsername());
    const [profilePhoto, setProfilePhoto] = useState(getProfilePhoto());
    const [numberLeagues, setNumberLeagues] = useState(getNumberLeagues());
    const [numberFriends, setNumberFriends] = useState(getNumberFriends());
    const [numberMedals, setNumberMedals] = useState(getNumberMedals());

    return (
        <div className = "profileHeaderClass">
            <div className = "profileNamePhoto">
                <h1 id = "profileName">Profile</h1>
                <div id = "changePhoto"><img id = "profilePhoto" src = {profilePhoto} alt = "profile"/></div>
            </div>
            <div className = "displaySection">
                <div id = "blankSpace"></div>
                <div id = "displayName">{name}</div>
                <div id = "displayUsername">{username}</div>
                <div className="displayUserInfo">
                    <div className = "numberInfo">{numberLeagues} Leagues</div>
                    <div className = "numberInfo">{numberFriends} Friends</div>
                    <div className = "numberInfo">{numberMedals} Medals</div>
                </div>
            </div>
        </div>
    );
}


export default ProfileHeader;