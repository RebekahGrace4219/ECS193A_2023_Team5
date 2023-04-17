import SideBar from "../components/Shared/SideBar";
import Header from "../components/Shared/Header";
import Line from "../components/Shared/Line";
import ProfileSettingsForm from "../components/ProfileSettings/ProfileSettingsForm"
import SensorSection from "../components/ProfileSettings/SensorSection";
import DeleteSection from "../components/ProfileSettings/DeleteSection";
import {useState, useEffect} from "react";
import axios from 'axios';
import "../css/Shared/page2.css"
const backend_url = process.env.REACT_APP_PROD_BACKEND;
const ProfileSettings = () => {
  const [load, setLoad] = useState(false);
  const [photo, setPhoto] = useState();
  const [displayName, setDisplayName] = useState("");

  useEffect (
    () => {
        if(!load){
            getPhoto();
            getDisplayName();
        }
    }, [load]
  );

  const createURL = (username) => {
    return "https://res.cloudinary.com/"+process.env.REACT_APP_CLOUDINARY_NAME+"/image/upload/profilePictures/"+username.replace("#", "_") + ".png";
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
      setDisplayName(response.data.displayName);
    })
    .catch(function(error){
      console.log(error)
    });
}

function getPhoto(){
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
      setPhoto(createURL(response.data))
      return response.data;
    })
    .catch(function(error){
      console.log(error)
    });
}



    return (
    <div id = "ProfileSettings" className = "Body2Part">
        <div className = "leftSide2Part">
            <SideBar></SideBar>
        </div>
        <div className="rightSide2Part">
          <div className = "main">
          <div className = "mainInfo">
            <Header>{{"title": "Profile Settings", "type": "none"}}</Header>
            <Line></Line>
            <ProfileSettingsForm>{{"photo":photo, "displayName":displayName}}</ProfileSettingsForm>
            <Line></Line>
            <SensorSection></SensorSection>
            <Line></Line>
            <DeleteSection></DeleteSection>
        </div>
        </div></div>
    </div>
    );
}

export default ProfileSettings;