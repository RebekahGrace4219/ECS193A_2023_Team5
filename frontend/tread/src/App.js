import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function App() {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const [ newProfile, setNewProfile] = useState(false)

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => signUp(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  function checkUserInDatabase(codeResponse) {
    return false;
  }

  function signUp(codeResponse){
    // 1. Ask the user what they what their username to be
    // 2. Assign them a set of numbers as a hash
    // 3. Check that this username is unique - move down the hash until true
    // 4. Place the user into the database
  }

  function login(codeResponse) {
    if(checkUserInDatabase){
      setUser(codeResponse);
    }
    else{
      setUser(codeResponse);
      signUp(codeResponse);
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

      }
    }
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
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}
export default App;