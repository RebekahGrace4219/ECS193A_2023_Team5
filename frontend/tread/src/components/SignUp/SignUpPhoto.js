import "../../css/SignUp/SignUpPhoto.css";
import "../../css/Shared/shared.css"
import React, {useState} from 'react';
const SignUpPhoto = (props) => {
    const [imageSrc, setImageSrc] = useState("https://i.imgur.com/0v3W3AG.png");

    function onImageChange(event) {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        setImageSrc(url);
        props.func(url);
    }


    return (
        <div id = "SignUpPhoto">
            <p className = "signUpSectionTitle">Profile Picture</p>
            <p className = "signUpSectionDescription">A face you are known for</p>
            <div id = "signUpPhotoShow">
                <img id = "signUpProfileImage" src = {imageSrc} alt = "profile"></img>
            </div>
            <input id = "fileInput" type = "file" accept = "image/*" onChange = {onImageChange}></input>
        </div>
    );
}

export default SignUpPhoto;
