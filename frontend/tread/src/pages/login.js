import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
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
    var data = JSON.stringify({
      "name" : profile.name,
      "email" : profile.email,
      "username": await findValidUsername()
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
          <button onClick={logOut}>Log out</button>*/

  return (
    <div>

      <h2>React Google Login</h2>

      <br />
      <br />
      {profile ? (
        <div>



        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}
export default Login;