import React, {useState} from 'react';
import '../../css/Shared/photoUpload.css';

const backend_url = process.env.REACT_APP_PROD_BACKEND;



const PhotoUpload = (props) => {
    const [image, setImage] = useState(props.defaultImage);

    function getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          // Set the viewing image
          setImage(reader.result);

          // send the image up the stream
          props.func(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }

    function onImageChange (event) {
        // Select the photo
        let photo = event.target.files[0];
        getBase64(photo);

    }

    return (
        <div>
            <div className = "photoShow">
                <img id = "uploadProfilePicture" className = "loadedProfileImage" src = {image} alt = "profile"></img>
            </div>
            <input className = "uploadPhoto" type = "file" accept = "image/*" onChange = {onImageChange}></input>
        </div>
    );



}


/*
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
*/
export default PhotoUpload;