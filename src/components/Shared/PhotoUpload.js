import React, {useState} from 'react';
import '../../css/Shared/photoUpload.css';

const backend_url = process.env.REACT_APP_PROD_BACKEND;

const PhotoUpload = (props) => {
    const [imageSrc, setImageSrc] = useState(props.defaultImage);


    function onImageChange(event) {
        let image = event.target.files[0];
        console.log(
            "uploaded image"
        );
        document.getElementById("uploadProfilePicture").src = image;

        setImageSrc(image);
        props.func(image);
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