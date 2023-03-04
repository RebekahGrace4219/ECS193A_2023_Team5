import '../../css/Shared/PhotoUpload.css'
import React, {useState} from 'react';
const PhotoUpload = (props) => {
    const [imageSrc, setImageSrc] = useState(props.defaultImage);

    function onImageChange(event) {
        let image = event.target.files[0];
        let url = URL.createObjectURL(image);
        setImageSrc(url);
        props.func(url);
    }

    return (
        <div>
            <div className = "photoShow">
                <img className = "loadedProfileImage" src = {imageSrc} alt = "profile"></img>
            </div>
            <input className = "uploadPhoto" type = "file" accept = "image/*" onChange = {onImageChange}></input>
        </div>
    );
}
export default PhotoUpload;