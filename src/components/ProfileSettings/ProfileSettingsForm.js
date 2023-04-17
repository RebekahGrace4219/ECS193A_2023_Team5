import React, {useState, useEffect} from 'react';

import PhotoUpload from '../Shared/PhotoUpload';

import axios from 'axios';

import "../../css/Shared/button.css";
import "../../css/Shared/form.css";

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const ProfileSettingsForm = (props) => {
  console.log(props.children.photo);
  console.log(props.children.displayName);
    const [photo, setPhoto] = useState(props.children.photo);
    const [displayName, setDisplayName] = useState(props.children.displayName);
    const [displayErrorResponse, setDisplayErrorResponse] = useState("");

    function uploadPhoto(submitPhoto){
        setPhoto(submitPhoto);
    }



    function validateDisplay(event){
      event.preventDefault();
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

    function submitPhoto(){
      var formData = new FormData();
      formData.append("photo", photo);
      var config = {
        method : 'post',
        url : backend_url + 'user/update_picture',
        headers: {
          Accept: 'application/json',
        },
        withCredentials: true,
        credentials: 'include',
        data : formData
      };
    axios(config)
    .then(function(response){
    })
    .catch(function(error){
      console.log(error)
      if(error.response.status===401){
        window.location.href = "/loginPage";
    }
    });
    }
    function submitDisplayName(){
        if (displayErrorResponse !== ""){
          return;
        }
        var config = {
          method : 'post',
          url : backend_url + 'user/update_display_name',
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
          credentials: 'include',
          data :
          {
            displayName :displayName
          }
        };
      axios(config)
      .then(function(response){
        setDisplayErrorResponse("succesfully updated display name");
      })
      .catch(function(error){
        console.log(error)
        if(error.response.status===401){
          window.location.href = "/loginPage";
      }
      });
    }

    function stopSubmit(event){
      event.preventDefault();
    }

    return (
    <div className = "Form">
        <div className="formObj">
                <h2>Profile Picture</h2>
                <PhotoUpload>{{"default":props.children.photo, "func":uploadPhoto}}</PhotoUpload>
                <button className="submitButton" onClick = {submitPhoto}><p className = "submitButtonText">Submit</p></button>
            </div>

            <div className="formObj">
                <h2>Display Name</h2>
                <p className="formObjInner">This is what others will see</p>
                <input id = "profileSettingsTextInput" className="formTextInput" type = "text" placeholder={props.children.displayName} onChange = {validateDisplay} onSubmit = {stopSubmit}/>
                <button className="submitButton" onClick = {submitDisplayName}><p className = "submitButtonText">Submit</p></button>
                <p className = "errorBox">{displayErrorResponse}</p>
            </div>
    </div>
    );
}

export default ProfileSettingsForm;