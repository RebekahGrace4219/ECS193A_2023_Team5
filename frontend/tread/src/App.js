import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function App() {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState(false);
  const [ chooseUsername, setChooseUsername] = useState(false);
  const [ newProfile, setNewProfile] = useState(false);
  const [ usernameSubmitted, setUsernameSubmitted] = useState(false);

  let state = {"text":"", "username":""};

  /* Google Auth functions */
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

  /* Username Form information */
  // Set the text state to the desired username
  function inputUsername(text){
    state["text"] = text.target.value;
  }

  // The username has been submitted, begin checking if it is valid
  function submitUsername(e){
    setUsernameSubmitted(true);
    e.preventDefaults();
  }

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
              setChooseUsername(true);
            }
            else{
              console.log("The user exists.");
            }
          })
          .catch((err) => console.log(err));
      }
    },
    [ user ]
  );

  /* Determine if the username is valid */
  function convertInt4DigitString(integer){
    let string = integer.toString();

    while (string.length < 4){
      string = "0" + string;
    }

    return string;
  }

  async function findValidUsername(username_base, base_digit_code){
    let username_found = true;
    let digit_string = convertInt4DigitString(base_digit_code);
    let attempt_username = username_base + "#" + digit_string;

    while (username_found){
      digit_string = convertInt4DigitString(base_digit_code);
      attempt_username = username_base + "#" + digit_string;

      var config = {
        method: 'get',
        url: 'http://localhost:5000/user/check_exist_username/' + attempt_username ,
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

      base_digit_code = (base_digit_code + 1) % 9999;
    }

    console.log("Decided on this username: " + attempt_username);
    state["username"] = attempt_username;
    return attempt_username;
  }



  useEffect(
    () => {
      if (newProfile) {
        var data = JSON.stringify({
          "name" : profile.name,
          "email" : profile.email,
          "username": state["username"]
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

          {(chooseUsername) ? <form  id = "userForm" >
        <label>Select a Username</label>
        <input onChange = {inputUsername} type = "text" name = "UsernamePicker" id = "UsernamePicker"></input>
        <button type = "submit" value = "Next"></button>
        </form> : <></>}
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}
export default App;