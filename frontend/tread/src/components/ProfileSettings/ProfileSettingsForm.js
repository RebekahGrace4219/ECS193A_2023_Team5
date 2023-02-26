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
        if (displayNameInput.length === 0){
            setDisplayErrorResponse("Cannot sign up, display name needs to be at least one character");
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
                <h1 className="formObjInner">Profile Picture</h1>
                <PhotoUpload defaultImage = {photo} func = {uploadPhoto}></PhotoUpload>
            </div>

            <div className="formObj">
                <h1 className="formObjInner">Display Name</h1>
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