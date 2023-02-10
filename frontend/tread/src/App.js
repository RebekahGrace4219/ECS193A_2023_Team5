import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { UsernameForm } from './UsernameForm.js';



function App() {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const [ newProfile, setNewProfile] = useState(false);
  const [ toggle, setToggle] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => loginUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  function checkUserInDatabase(codeResponse) {
    return false;
  }

  function createEmailHash(email){
    return 45;
  }

  async function signUpUser(){
    // 1. Assign them a set of numbers as a hash from their email
    let hash = createEmailHash(profile.email);

    // 2. Ask the user what they what their username to be
    setToggle(true);

    return false;
  }

  function loginUser(codeResponse) {
    if(checkUserInDatabase()){
      setUser(codeResponse);
    }
    else{
      setUser(codeResponse);
    }
  }

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
          .then((res) => {
            setProfile(res.data);
            setNewProfile(true)
          })
          .catch((err) => console.log(err));
      }
    },
    [ user ]
  );

  useEffect(
    () => {
      if (newProfile) {
        var data = JSON.stringify({
          "name" : profile.name,
          "email" : profile.email
        });
        console.log("This is where I log the data");
        signUpUser();
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
      }
    },
    [ newProfile]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
          {toggle ?
            <UsernameForm id = "usernameForm"></UsernameForm>
            :
            <></>
          }
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}
export default App;