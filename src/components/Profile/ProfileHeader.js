import {useState, useEffect} from 'react';
import QRcode from "qrcode";
import axios from "axios";

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
            }
        }, [load]
    );

    const getQrCode = () => {

        let url = "https://tread.run/requestFriend?" + username;
        QRcode.toDataURL(url, {"color":{"light":"#F1EEEA"}}, (err, url) => {
            if (err) return console.error(err)
            setQRCode(url);
        })
    }

    const getProfilePhoto = ()=> {
        // here I will get the profile photo
        return 1;
    }

    useEffect (
        () => {
            if(username != ""){
                getQrCode();
                getProfilePhoto();
            }
        }, [username]
    );

    return(
        <div>
            <div className = "profilePhoto">
                <img></img>
            </div>
            <div className = "profileDescription">
                <p>{username}</p>
                <p>{displayName}</p>
            </div>
            <div className = "qrcode">
                <img src = {qrcode}></img>
            </div>

        </div>
    )

}

export default ProfileHeader;