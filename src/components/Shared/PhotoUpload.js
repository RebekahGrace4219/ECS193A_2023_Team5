import axios from 'axios';

import '../../css/Shared/photoUpload.css'
import React, {useState} from 'react';
const backend_url = process.env.REACT_APP_PROD_BACKEND

const PhotoUpload = (props) => {
    const [imageSrc, setImageSrc] = useState(props.defaultImage);


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