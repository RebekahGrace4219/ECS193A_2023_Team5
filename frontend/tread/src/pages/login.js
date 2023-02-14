import React, { useState, useEffect } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../css/login.css';

const Login = () => {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState(false);
  const [ newProfile, setNewProfile] = useState(false);


  /* Google Auth functions */
  let navigate = useNavigate();
  // Login
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


  /* Logged in now, set the profile information and if the user is new, open the submittal form */
  // Check the User's email has been already used
  async function checkUserAlreadyExists(email){
    var config = {
      method: 'get',
      url: 'http://localhost:5000/user/check_exist/' + email ,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    let exist = false;
    await axios(config)
    .then(function (response) {
      exist = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    return exist;
  }

  // Log in the user
  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then(async (res) => {
            setProfile(res.data);
            if( ! await checkUserAlreadyExists(res.data.email) ){
              console.log("The user does not exist and must be added");
              setNewProfile(true);
            }
            else{
              console.log("The user exists.");
              navigate("/profilePage");

            }
          })
          .catch((err) => console.log(err));
      }
    },
    [ user ]
  );

  /* Determine if the username is valid */
  function convertInt6DigitString(integer){
    let string = integer.toString();

    while (string.length < 6){
      string = "0" + string;
    }

    return string;
  }

  async function findValidUsername(){
    let username_found = true;

    let value = Math.floor(Math.random() * 999999);
    let digit_string = convertInt6DigitString(value);


    while (username_found){
      digit_string = convertInt6DigitString(value);

      var config = {
        method: 'get',
        url: 'http://localhost:5000/user/check_exist_username/' + digit_string ,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      await axios(config)
        .then(function (response) {
          username_found = response.data;
        })
        .catch(function (error) {
          console.log("erorr trying to check if the username exists");
          console.log(error);
        });

        value = Math.floor(Math.random() * 999999);
    }

    console.log("Decided on this username: " + digit_string);

    return digit_string;
  }

  async function send_post(){
    let username = await findValidUsername();
    var data = JSON.stringify({
      "name" : profile.name,
      "email" : profile.email,
      "username": username,
      "sent_requests":[],
      "recieved_requests":[],
      "friends":[]
    });
    console.log(data);

    var config = {
      method: 'post',
      url: 'http://localhost:5000/user/create_user',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    return config;
  }

  useEffect(
    () => {
      if (newProfile) {
        send_post();
        window.location.href = "/profilePage";

      }
    }, [newProfile]
  );

  return (

    <div className = "loginPage">
      <div className = "loginSide">
        <div className = "loginBox">
          <div className = "loginBoxItem"><img id = "treadLogo" src = "https://i.imgur.com/cHe0EGL.png" alt = "logo"/></div>
          <div className = "loginBoxItem"><p  id = "loginText">Log in</p></div>
          <div className = "loginBoxItem">
            <button className = "SignInButton" onClick = {() => login()}>
              <div className = "SignInButtonInner">
              <div className = "imgDiv"><img className = "SingInButtonImage" src= "https://i.imgur.com/YynpaHO.png" alt = "google logo"/></div>

              <p className = "buttonNames">Google</p>
              </div>
            </button>
          </div>
          <div className = "loginBoxItem">
            <button className = "SignInButton">
            <div className = "SignInButtonInner">
              <div className = "imgDiv"><img className = "SingInButtonImage" src= "https://i.imgur.com/2QWqIA4.png" alt = "facebook logo"/></div>
              <p className = "buttonNames">Facebook</p></div>
            </button>

          </div>
        </div>
      </div>
      <div className = "backgroundSide">
        <div className = "titleBox">
          <div id = "title"><img src= "https://i.imgur.com/U7OO0JG.png" alt = "Tread"/></div>
          <div id = "subtitle"><img src = "https://i.imgur.com/Mx4rK6l.png" alt = "Stay Fit with Friends"/></div>
        </div>
        <div id = "weightliftPhoto"><img src= "https://i.imgur.com/ifnDau9.png" alt = "Weightlifting"/></div>
        <div id = "runPhoto"><img src= "https://i.imgur.com/nkzYE4O.png" alt = "running"/></div>
        <div id = "treadmillPhoto"><img src= "https://i.imgur.com/lCxkPiY.png" alt = "Treadmill"/></div>
        <div id = "pushUpPhoto"><img src= "https://i.imgur.com/s4OWEhz.png" alt = "Pushup"/></div>
      </div>
    </div>
  );
}
export default Login;