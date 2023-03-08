import {useState, useEffect} from 'react';
import "../../css/Shared/userSettingsButton.css"
import "../../css/Shared/form.css"
import axios from 'axios';

const backend_url = process.env.REACT_APP_PROD_BACKEND

const UserSettingsButton = () => {

  const [load] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [profilePhoto, setPhoto] = useState("");

  const [logoutDisplay, setLogoutDisplay] = useState(false);
  const [decisionState, setDecisionState] = useState("");

  useEffect (
    () => {
        if(!load){
            getUsername();
            getProfilePhoto();
            getDisplayName();
        }
    }, [load]
  );


    function logout(){
      var config  = {
        method : 'post',
        url: backend_url+'auth/logout',
        headers: {
            Accept: 'application/json',
          },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          console.log("logged out")
          window.location.href = "./";

      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
    }

    function stopLogoutDisplay(){
        setLogoutDisplay(false);
    }

    function toggleLogoutDisplay(){
        setLogoutDisplay(!logoutDisplay);
    }
    function moveProfilePage(){
        window.location.href = "./profileStatsPage"
    }

    function getDisplayName(){
      // GET from db
      var config = {
        method : 'post',
        url : backend_url + 'user/get_display_name',
        headers: {
          Accept: 'application/json',
        },
        withCredentials: true,
        credentials: 'include',
      };
      axios(config)
      .then(function(response){
        setDisplayName(response.data.displayName)
        return response.data.displayName;
      })
      .catch(function(error){
        console.log(error)
      });
  }

  function getUsername(){
    var config = {
      method : 'post',
      url : backend_url + 'user/get_username',
      headers: {
        Accept: 'application/json',
      },
      withCredentials: true,
      credentials: 'include',
      };
      axios(config)
      .then(function(response){
        setUsername(response.data)
        return response.data;
      })
      .catch(function(error){
        console.log(error)
      });
  }

  function getProfilePhoto(){
      var config  = {
        method : 'post',
        url: backend_url+'auth/get_profile_photo',
        headers: {
            Accept: 'application/json',
          },
        withCredentials: true,
        credentials: 'include'
      };
      axios(config)
      .then(function(response) {
          setPhoto(response.data)
          return response.data;
      })
      .catch(function(error){
          console.log(error)
      });
    }

    function movePage(event){
        setDecisionState(event.target.value);
    }

    useEffect(
        () => {
          if (decisionState === "Profile") {
            moveProfilePage();
            stopLogoutDisplay();
          }
          else if (decisionState === "Logout"){
            logout();
            stopLogoutDisplay();
          }
        }, [ decisionState]
      );
    return (
        <div id = "UserSettingsButton" >
            <button id = "UserSettingsLeft" onClick={moveProfilePage}>
                <div>
                    <img id = "UserSettingButtonProfileImage" src = {profilePhoto} alt = "Profile"/>
                </div>
                <div id = "userSettingNaming">
                    <p id ="userSettingDisplayName">{displayName}</p>
                    <p id ="userSettingUsername">{username}</p>
                </div>
            </button>
            <div id = "userSettingButtonSection">
                <button className = "dropDownButton" onClick = {toggleLogoutDisplay}><img src = "https://i.imgur.com/B5Dnylx.png" alt = "Dropdown"/></button>
                {
                    logoutDisplay ?
                    <select className = "formSelect" id = "LogoutSelect" onChange={movePage}>
                        <option value = ""></option>
                        <option value = "Profile">Profile</option>
                        <option value = "Logout">Logout</option>
                    </select>
                    : <></>
                }

            </div>
        </div>
    );
}


export default UserSettingsButton;