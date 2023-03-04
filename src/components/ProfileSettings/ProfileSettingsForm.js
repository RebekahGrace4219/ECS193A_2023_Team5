import React, {useState} from 'react';

import PhotoUpload from '../Shared/PhotoUpload';
import "../../css/Shared/button.css";
import "../../css/Shared/form.css";

const ProfileSettingsForm = () => {
    const [photo, setPhoto] = useState(getProfilePhoto());
    const [displayName, setDisplayName] = useState(getDisplayName());
    const [displayErrorResponse, setDisplayErrorResponse] = useState("");
    const [submitErrorResponse, setSubmitErrorResponse] = useState();

    function getProfilePhoto(){
        //TODO get the profile photo from the db
        return ("https://i.imgur.com/4e8Io40.png");
    }

    function getDisplayName(){
        // TODO get the display name from the db
        return ("Generic Display name");
    }

    function uploadPhoto(photo){
        setPhoto(photo);
    }

    function validateDisplay(event){
        let displayNameInput = event.target.value;
        if (displayNameInput.length === 0 || displayNameInput.length > 32){
            setDisplayErrorResponse("Cannot sign up, display name between 1-32 characters");
            return false;
        }

        if (!(/^[a-z0-9 ]+$/i.test(displayNameInput))) {
            setDisplayErrorResponse("Display Name input must only have alphanumeric and spaces");
            return false;
        }

        setDisplayErrorResponse("");
        setDisplayName(displayNameInput);
        return true;
    }

    function submitProfileSettings(){
        //verify stuff, if bad inputs or bad response, trigger errors and if succesful, stay on page
    }


    return (
    <div className = "Form">
        <div className="formObj">
                <h2>Profile Picture</h2>
                <PhotoUpload defaultImage = {photo} func = {uploadPhoto}></PhotoUpload>
            </div>

            <div className="formObj">
                <h2>Display Name</h2>
                <p className="formObjInner">This is what others will see</p>
                <input className="formTextInput" type = "text"  onChange = {validateDisplay}/>
                <p className = "errorBox">{displayErrorResponse}</p>
            </div>

            <div className = "formObj">
                <button className="submitButton" onClick = {submitProfileSettings}><p className = "submitButtonText">Submit</p></button>
                <p className = "errorBox">{submitErrorResponse}</p>
            </div>
    </div>
    );
}

export default ProfileSettingsForm;