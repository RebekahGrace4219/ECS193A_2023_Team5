import "../css/SignUp/SignUp.css"

import SignUpSideBar from "../components/SignUp/SignUpSideBar";
import SignUpForm from "../components/SignUp/SignUpForm";
import {useState} from "react";
import axios from "axios";

// const backend_url = process.env.REACT_APP_PROD_BACKEND
const backend_url = process.env.REACT_APP_PROD_BACKEND
const SignUp = () => {
    const [profilePhoto,setPhoto] = useState(getProfilePhoto());
    function getProfilePhoto(){
        var config  = {
            method : 'post',
            url: backend_url+'auth/get_profile_photo',
            headers: {
                Accept: 'application/json',
              },
            withCredentials: true,
            credentials: 'include'
        };
        axios(config)
        .then(function(response) {
            setPhoto(response.data);
            return response.data;
        })
        .catch(function(error){
            console.log(error)
        });
    }

    return (
        <div id = "SignUp">
            <SignUpSideBar id = "SignUpBar"/>
            <SignUpForm id = "SignUpForm">{{"profilePhoto":profilePhoto}}</SignUpForm>
        </div>
    );
}

export default SignUp;