import React from 'react';
import axios from 'axios';
import '../css/Login/login.css';
import { getToken} from 'firebase/messaging';
import {exportMessaging, requestPermission} from "../firebase";
import {useState} from "react";

//const backend_url = process.env.REACT_APP_PROD_BACKEND
const backend_url = process.env.REACT_APP_PROD_BACKEND
const env_client_id = process.env.REACT_APP_CLIENT_ID

const Login = () => {
  const [deviceToken, setToken] = useState("");
  // needs variable for nonce
  function handleCredentialResponse(token) {


    // Check that recieved nonce is correct
    // Send request to backend for nonce reply in result with cnonce:
    // nonce with timestamp so repeat attacks won't work.
    // Figure out CSRF attacks (double cookie sending)
    // Also alot of stuff will have to change for HTTPS.

    console.log(token)
    console.log("Encoded JWT ID token: " + token.credential);
    console.log("TEST MESSAGE");
    console.log("backend_url: " + backend_url);
    console.log("client id: " + env_client_id);
    console.log("Sending device token" + deviceToken);
    var config = {
      method: 'post',
      url: backend_url+'auth/login/google',
      withCredentials: true,
      credentials: 'include',
      headers: {
        Authorization: `${token.credential}`,
        Accept: 'application/json',
      },
      data :
      {
        deviceToken: deviceToken
      }
    };
    let hasUsername= false;
    axios(config)
    .then(function (response) {
      hasUsername = response.data.hasUsername;
      console.log("Would have navigated away here");
      if (!hasUsername){
        window.location.href = "./signUpPage";
      }
      else{
        window.location.href = "./currentChallengePage";
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  function loadScript(scriptUrl) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.body.appendChild(script);

    return new Promise((res, rej) => {
      script.onload = function() {
        res();
      }
      script.onerror = function () {
        rej();
      }
    });
  }

  function googleSignIn() {
    if (window.google) {
      const google = window.google;
      google.accounts.id.initialize({
        client_id: env_client_id,
        callback: handleCredentialResponse,
        // Need to set a random nonce
        nonce: ""
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }

  // google sign in
  loadScript('https://accounts.google.com/gsi/client')
    .then(() => {
      googleSignIn();
      setDeviceToken();
    })
    .catch(() => {
      console.error('Script loading failed! Handle this error');
    });


  // log out function to log the user out of google and set the profile array to null

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
  return (

    <div className = "loginPage">
      <div className = "loginSide">
        <div className = "loginBox">
          <div className = "loginBoxItem"><img id = "treadLogo" src = "https://i.imgur.com/cHe0EGL.png" alt = "logo"/></div>
          <div className = "loginBoxItem"><p  id = "loginText">Log in</p></div>
          <div className = "loginBoxItem">

          <div id="buttonDiv"></div>

          </div>
          <div className = "loginBoxItem">

          </div>
        </div>
      </div>
      <div className = "backgroundSide">
        <div className = "titleBox">
          <div id = "TreadTitleDiv"><img id = "TreadTitle" src = "https://i.imgur.com/U7OO0JG.png" alt = "Tread"/></div>
          <div id = "TreadSubtitleDiv"><img id = "TreadSubtitle" src = "https://i.imgur.com/Mx4rK6l.png" alt = "Stay Fit with Friends"/></div>
        </div>
        <div><img  id = "weightLiftPhoto" src= "https://i.imgur.com/ifnDau9.png" alt = "Weightlifting"/></div>
      </div>
    </div>
  );
}
export default Login;