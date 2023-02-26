import '../../css/Shared/shared.css';
import '../../css/ProfileSettings/ProfileSettingsHeader.css';
import UserSettingsButton from '../Shared/UserSettingsButton';
import EditDisplayNameSection from './EditDisplayNameSection';
import EditProfilePhotoSection from './EditProfilePhotoSection';
import Line from '../Shared/Line';
import React, {useState} from 'react';
const ProfileSettingsHeader = () => {
    const [profilePhoto, setProfilePhoto] = useState(getProfilePhoto());
    const [displayName, setDisplayName] = useState(getDisplayName());
    const [response, setResponse] = useState("");

    function getProfilePhoto(){
        // TODO
        return "https://w7.pngwing.com/pngs/97/276/png-transparent-pokemon-eevee-illustration-pokemon-go-pokemon-x-and-y-pikachu-eevee-pokemon-mammal-vertebrate-cartoon-thumbnail.png";
    }

    function getDisplayName(){
        //TODO
        return "Rebekah Grace";
    }

    function sendInformation(){
        //TODO
        console.log("Here I would replace the information in the database that has been changed");
        setResponse("succesffully changed");
    }


    return (
        <div id = "ProfileSettingsHeader">
            <div id = "TopProfileHeader">
                <h1>Profile Settings</h1>
                <UserSettingsButton/>
            </div>
            <EditProfilePhotoSection information = {profilePhoto} func = {setProfilePhoto}></EditProfilePhotoSection>
            <EditDisplayNameSection information = {displayName} func = {setDisplayName}></EditDisplayNameSection>
            <p>{response}</p>
            <button className = "ProfileButton" onClick = {sendInformation}><p className='ProfileButtonText'>Submit</p></button>
            <Line></Line>
        </div>
    )
}

export default ProfileSettingsHeader;