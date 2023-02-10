import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function App() {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const [ newProfile, setNewProfile] = useState(false)


  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  function generateUsername(){
    return "45";
  }

  async function checkUserAlreadyExists(email){
    var config = {
      method: 'get',
      url: 'http://localhost:5000/username/check_exist/' + email ,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    await axios(config)
    .then(function (response) {
      console.log("Response from the check works");
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("Response from the check error");
      console.log(error);
    });

    return true;
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
            console.log("Check if the person exists");
            console.log(res.data);
            if(!checkUserAlreadyExists(res.data.email)){
              setNewProfile(true)
            }
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
          "email" : profile.email,
          "username" : "username"
        });
        console.log(data);

        var config = {
          method: 'post',
          url: 'http://localhost:5000/username/create_user',
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