import axios from 'axios';

import '../../css/Shared/PhotoUpload.css'
import React, {useState} from 'react';
const backend_url = process.env.REACT_APP_DEV_BACKEND

const PhotoUpload = (props) => {
    const [imageSrc, setImageSrc] = useState(props.defaultImage);

  //   function getProfilePhoto(){
  //     var config  = {
  //         method : 'post',
  //         url: backend_url+'auth/get_profile_photo',
  //         headers: {
  //             Accept: 'application/json',
  //           },
  //         withCredentials: true,
  //         credentials: 'include'
  //     };
  //     axios(config)
  //     .then(function(response) {
  //         console.log("response received")
  //         console.log(response.data)
  //         setImageSrc(response.data)
  //         return response.data;
  //     })
  //     .catch(function(error){
  //         console.log(error)
  //         console.log("No response")
  //     });
  //  }

    function onImageChange(event) {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        document.getElementById("uploadProfilePicture").src = url;

        setImageSrc(url);
        props.func(url);
    }

    return (
        <div>
            <div className = "photoShow">
                <img id = "uploadProfilePicture" className = "loadedProfileImage" src = {props.defaultImage} alt = "profile"></img>
            </div>
            <input className = "uploadPhoto" type = "file" accept = "image/*" onChange = {onImageChange}></input>
        </div>
    );
}
export default PhotoUpload;