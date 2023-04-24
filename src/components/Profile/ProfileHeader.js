import {useState, useEffect} from 'react';
import QRcode from "qrcode";
import axios from "axios";
import {createProfilePictureURL} from "../../Helpers/CloudinaryURLHelpers";
import "../../css/Shared/button.css";
import "../../css/Profile/profileHeader.css";
const backend_url = process.env.REACT_APP_PROD_BACKEND;

const ProfileHeader = () => {
    const [load, setLoad] = useState(false);
    const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [qrcode, setQRCode] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");

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
          setProfilePhoto(createProfilePictureURL(response.data));
          return response.data;
        })
        .catch(function(error){
          console.log(error)
        });
    }
    useEffect (
        () => {
            if(!load){
                getUsername();
                getDisplayName();
                setLoad(true);
            }
        }, [load]
    );

    const getQrCode = () => {
        let url = "https://tread.run/requestFriend?" + username;
        QRcode.toDataURL(url, {"color":{"light":"#D9D9D9"}}, (err, url) => {
            if (err) return console.error(err)
            setQRCode(url);
        })
    }

    useEffect (
        () => {
            if(username !== ""){
                getQrCode();
            }
        }, [username]
    );

    const moveSettingsPage = () => {
        window.location.href = "./profileSettingsPage";
    }
    return(
        <div id = "profileHeader">
            <div id = "profileHeaderLeft">
            <div className = "profilePictureDiv">
                <img className = "profilePicture" src = {profilePhoto} alt = "profile"></img>


            </div>
            <div className = "profileDescription">
                <div id = "profileTopLine">

                <h2>{username}</h2>
                <button className = "editButton" onClick = {moveSettingsPage}><img className = "editButtonImage" src = {"https://i.imgur.com/but4GRp.png"} alt = "edit button"></img></button>
                </div>
                <h3>{displayName}</h3>
            </div>
            </div>
            <div className = "qrcode">
                <img className = "qrcodeImage" src = {qrcode} alt = "qr code for friend request"></img>
            </div>


        </div>
    )

}

export default ProfileHeader;