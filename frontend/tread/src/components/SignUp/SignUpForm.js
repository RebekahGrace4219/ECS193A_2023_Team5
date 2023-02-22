import React, {useState} from 'react';
import SignUpPhoto from "./SignUpPhoto";
import SignUpDisplayName from "./SignUpDisplayName";
import SignUpUsername from "./SignUpUsername";
import axios from 'axios';
import '../../css/SignUp/SignUpForm.css';
import '../../css/Shared/shared.css';
const SignUpForm = () => {
    const [photo, setPhoto] = useState();
    const [displayName, setDisplayName] = useState();
    const [username, setUsername] = useState();
    const [response, setResponse] = useState();


    function submitSignUpInformation(){
        // Check the display name is greater than one character
        if (displayName.length === 0){
            setResponse("Cannot sign up, display name needs to be at least one character");
            return false;
        }

        if (!(/^[a-z0-9]+$/i.test(displayName))) {
            setResponse("Cannot sign up, display name should be alphanumeric");
            return false;
        }

        if (username.length === 0 || username.length > 32){
            setResponse("Cannot sign up, username needs to be between 1-32 characters");
            return false;
        }

        if (!(/^[a-z0-9]+$/i.test(displayName))) {
            setResponse("Cannot sign up, username should be alphanumeric");
            return false;
        }

        let data = JSON.stringify({
            "username":username,
            "displayName":displayName,
            "photo":photo
        });

        var config = {
            method: 'post',
            url: 'http://localhost:5000/auth/sign_up',
            headers: {
              'Content-Type': 'application/json'
            },
            data : data
        };


        axios(config)
          .then(function (response) {
            console.log("In the then");
            console.log(response);
          })
          .catch(function (error) {
            console.log("In the Catch");
            console.log(error);
          });
        console.log("Hit Sign UP");
    }

    return (
        <div id = "SignUpForm">
            <p id = "title">Tread</p>
            <p id = "subtitle">Looks like you're new here</p>
            <SignUpPhoto func = {setPhoto}></SignUpPhoto>
            <SignUpDisplayName  func = {setDisplayName} ></SignUpDisplayName>
            <SignUpUsername  func = {setUsername}></SignUpUsername>
            <button className = "ProfileButton" onClick = {submitSignUpInformation}><p className = "ProfileButtonText">Sign Up</p></button>
            <p>{response}</p>
        </div>);
}
export default SignUpForm;