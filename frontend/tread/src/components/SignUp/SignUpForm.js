import React, {useState} from 'react';
import PhotoUpload from '../Shared/PhotoUpload';

import axios from 'axios';
import '../../css/SignUp/signUpForm.css';
import '../../css/Shared/button.css';
import '../../css/Shared/form.css';
import '../../css/Shared/header.css';

const SignUpForm = () => {
    function getProfilePhoto(){
        //TODO
    }

    const [photo, setPhoto] = useState(getProfilePhoto());
    const [displayName, setDisplayName] = useState();
    const [username, setUsername] = useState();
    const [displayErrorResponse, setDisplayErrorResponse] = useState();
    const [usernameErrorResponse, setUsernameErrorResponse] = useState();
    const [submitErrorResponse, setSubmitErrorResponse] = useState();

    function validateDisplay(event){
        let displayName = event.target.value;
        if (displayName.length === 0){
            setDisplayErrorResponse("Cannot sign up, display name needs to be at least one character");
            return false;
        }

        setDisplayErrorResponse("");
        setDisplayName(displayName);
        return true;
    }

    function validateUsername(event){
        let username = event.target.value;
        if (username.length === 0 || username.length > 32){
            setUsernameErrorResponse("Cannot sign up, username needs to be between 1-32 characters");
            return false;
        }

        if (!(/^[a-z0-9]+$/i.test(displayName))) {
            setUsernameErrorResponse("Cannot sign up, username should be alphanumeric");
            return false;
        }

        setUsernameErrorResponse("");
        setUsername(username);
    }

    function submitSignUp(){
        // validate the pieces information
        // Send to post
            // If fail, update the failure reason on the three forms for failure
            // If succeed, move away from page
    }

    function uploadPhoto(photo){
        setPhoto(photo);
    }

    return (
        <div id = "SignUpForm">
            <div>
                <p id = "title">Tread</p>
                <p id = "subtitle">Looks like you're new here</p>
            </div>

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

            <div className="formObj">
                <h1 className="formObjInner">Username</h1>
                <p className="formObjInner">This is a unique identifier to you.</p>
                <input className="formTextInput" type = "text"  onChange = {validateUsername}/>
                <p className = "errorBox">{usernameErrorResponse}</p>
            </div>

            <div className = "formObj">
                <button className="submitButton" onClick = {submitSignUp}><p className = "submitButtonText">Submit</p></button>
                <p className = "errorBox">{submitErrorResponse}</p>
            </div>

        </div>


    );
}

export default SignUpForm;