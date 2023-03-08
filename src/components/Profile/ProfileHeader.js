import React, {useState, useEffect} from 'react';
import PageSwitch from "../Shared/PageSwitch";
import "../../css/Profile/profileHeader.css";
import "../../css/Shared/header.css";

import axios from 'axios';

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const ProfileHeader = () => {
    const [load] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [username, setUsername] = useState("");
    const [profilePhoto, setPhoto] = useState("");


    useEffect (
      () => {
          if(!load){
              getUsername();
              getProfilePhoto();
              getDisplayName();
          }
      }, [load]
    );

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
          setDisplayName(response.data.displayName);
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
          setUsername(response.data);
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
          setPhoto(response.data);
      })
      .catch(function(error){
          console.log(error)
          console.log("No response")
      });
    }



    return (
        <div id = "ProfileHeader">
            <div className = "headerTop">
                <h1>Profile</h1>
                <PageSwitch type = "profile"></PageSwitch>
            </div>
            <div className = "profileBody">
                <div id = "profileInformationSide">
                <div>
                    <img id = "profilePhoto" src = {profilePhoto} alt = "profile"/>
                </div>
                <div>
                    <h1>{displayName}</h1>
                    <h3>{username}</h3>
                </div>
                </div>
                <div>
                    <h2>Add code</h2>
                    <img src = "https://i.imgur.com/rpi5EL2.png" alt = "QR Code for adding"/>
                </div>
            </div>

        </div>
    );
}


export default ProfileHeader;