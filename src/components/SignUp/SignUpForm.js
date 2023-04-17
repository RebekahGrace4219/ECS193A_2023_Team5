import React, {useState, useEffect} from 'react';
import PhotoUpload from '../Shared/PhotoUpload';
import axios from 'axios';

import '../../css/SignUp/signUpForm.css';
import '../../css/Shared/button.css';
import '../../css/Shared/form.css';
import '../../css/Shared/headerText.css';

import { getToken} from 'firebase/messaging';
import {exportMessaging, requestPermission} from "../../firebase";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const SignUpForm = (props) => {

    const [deviceToken, setToken] = useState("");
    const [photo, setPhoto] = useState("");
    const [load] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [displayErrorResponse, setDisplayErrorResponse] = useState("");
    const [usernameErrorResponse, setUsernameErrorResponse] = useState("");
    const [submitErrorResponse, setSubmitErrorResponse] = useState("");

    useEffect (
      () => {
          if(!load){
              setDeviceToken();
          }
      }, [load]
    );

    const determinePhoto = () => {
      if (photo === ""){
        return props.children.profilePhoto;
      }
      else{
        return photo;
      }
    }
    const setDeviceToken = () => {
      getToken(exportMessaging, {vapidKey: "BDXZrQCKEnAfnJWh6oIbEYKTuogSmiNl4gKVIDNmOEabzRt2BpAVIV4Znb7OgKzWJAz9eLOKde6YhWLpAdw1EZ0"}).then((currentToken) => {
        if (currentToken) {
          console.log("Setting token here", currentToken);
          setToken(currentToken);
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          requestPermission();
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
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

    function validateUsername(event){
        let usernameInput = event.target.value;
        if (usernameInput.length === 0 || usernameInput.length > 32){
            setUsernameErrorResponse("Cannot sign up, username needs to be between 1-32 characters");
            return false;
        }

        if (!(/^[a-z0-9]+$/i.test(usernameInput))) {
            setUsernameErrorResponse("Cannot sign up, username should be alphanumeric");
            return false;
        }

        setUsernameErrorResponse("");
        setUsername(usernameInput);
    }

    function submitSignUp(){

      if (displayErrorResponse !== "" || usernameErrorResponse !== ""){
        setSubmitErrorResponse("Correct the highlighted fields to proceed")
        return false
      }

      let submitPhoto = determinePhoto();

      var formData = new FormData();
      formData.append("username", username);
      formData.append("displayName", displayName);
      formData.append("deviceToken", deviceToken);
      formData.append("picture", submitPhoto);

      console.log(submitPhoto);

      var config = {
              method : 'post',
              url : backend_url + 'auth/sign_up',
              headers: {
                "Content-Type": "multipart/form-data"
              },
              withCredentials: true,
              credentials: 'include',
              data: formData
            };
          axios(config)
          .then(function(response){
            window.location.href = "./currentChallengePage";
            console.log("Sent Sign up Succesfuly")
          })
          .catch(function(error){
            console.log("Did not send sign up succesfully", error);
            if(error.response.status===401){
              window.location.href = "/loginPage";


          }
          });
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
                <h1>Profile Picture</h1>
                <PhotoUpload>{{"default":props.children.profilePhoto, "func":uploadPhoto}}</PhotoUpload>
            </div>

            <div className="formObj">
                <h1>Display Name</h1>
                <p className="formObjInner">This is what others will see.</p>
                <input className="formTextInput" type = "text"  onChange = {validateDisplay}/>
                <p className = "errorBox">{displayErrorResponse}</p>
            </div>

            <div className="formObj">
                <h1>Username</h1>
                <p className="formObjInner">This is a public, but unique identifier to you.</p>
                <input className="formTextInput" type = "text"  onChange = {validateUsername}/>
                <p className = "errorBox">{usernameErrorResponse}</p>
            </div>

            <div className = "formObj">
                <button className="submitButton" onClick = {submitSignUp}><p className = "submitButtonText">Sign Up</p></button>
                <p className = "errorBox">{submitErrorResponse}</p>
            </div>

        </div>


    );
}

export default SignUpForm;