import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
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
              navigate("/friendPage");

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
        window.location.href = "/friendPage";

      }
    }, [newProfile]
  );

/* old code to display profile <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>




      <Parent>Parent</Parent>

      <h2>React Google Login</h2>

      <br />
      <br />
      {profile ? (
        <div>


      <button onClick={() => logOut()}>Log out 🚀 </button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}

    */

  const backgroundStyle = {
    backgroundImage: 'url(https://i.imgur.com/jgNSfpU.png)',
    marginTop: '-20px',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
/*
<div className = 'Title'><img src= "https://i.imgur.com/U7OO0JG.png" alt = "Tread"/></div>
      <div className = 'Subtitle'><img src = "https://i.imgur.com/Mx4rK6l.png" alt = "Stay Fit with Friends"/></div>
      <div className='Spacing'>
      <div className = 'loginSize'>

      </div>
      <div className = 'BackgroundSide'>
        <div className = 'TitleDiv'>

        </div>
        <div></div>
      </div>
  </div>
  <div>
  <h1>Test Header</h1>
  <div style = {backgroundStyle}><h2>header2</h2></div>
  </div>
*/
  return (
    <div className = "loginPage">
      <div className = "loginSide">
        <div className = "loginBackground"><h1>Login</h1></div>
      </div>
      <div className = "backgroundSide" style = {backgroundStyle}>
        <div className = 'backgroundTitle'><img src= "https://i.imgur.com/U7OO0JG.png" alt = "Tread"/></div>
        <div className = 'backgroundSubtitle'><img src = "https://i.imgur.com/Mx4rK6l.png" alt = "Stay Fit with Friends"/></div>
      </div>

    </div>
  );
}
export default Login;