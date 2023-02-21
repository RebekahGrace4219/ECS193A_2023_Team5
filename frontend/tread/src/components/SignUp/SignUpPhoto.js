import "../../css/SignUp/SignUpPhoto.css";
import "../../css/Shared/shared.css"
import React, {useState} from 'react';
const SignUpPhoto = () => {
    const [imageSrc, setImageSrc] = useState("https://i.imgur.com/0v3W3AG.png");
    function onImageChange(event) {
        let image = event.target.files[0];
        setImageSrc(URL.createObjectURL(image));
    }

    return (
        <div id = "SignUpPhoto">
            <p className = "signUpSectionTitle">Profile Picture</p>
            <p className = "signUpSectionDescription">A face you are known for</p>
            <div id = "signUpPhotoShow">
                <img id = "signUpProfileImage" src = {imageSrc}></img>
            </div>
            <input id = "fileInput" type = "file" accept = "image/*" onChange = {onImageChange}></input>
        </div>
    );
}

export default SignUpPhoto;
