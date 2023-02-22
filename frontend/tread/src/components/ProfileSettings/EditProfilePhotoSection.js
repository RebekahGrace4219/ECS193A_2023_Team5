
import PhotoUpload from "../Shared/PhotoUpload";
import React, {useState} from 'react';
import "../../css/ProfileSettings/EditProfilePhotoSection.css"
const EditProfilePhotoSection = (props) => {
    return (
        <div id = "EditProfilePhotoSection">
            <h2>Edit Profile Photo</h2>
            <PhotoUpload defaultImage = {props.information} func = {props.func}></PhotoUpload>
        </div>
    )
}

export default EditProfilePhotoSection;