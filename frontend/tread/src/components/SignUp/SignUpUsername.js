import "../../css/Shared/shared.css"
import "../../css/SignUp/SignUpUsername.css"
import React, {useState} from "react";
const SignUpUsername = (props) => {
    const [response, setResponse] =useState();

    function isValidUsername(username) {
        if (username.length === 0 || username.length > 32) {
          return false;
        }

        if (!(/^[a-z0-9]+$/i.test(username))) {
          return false;
        }

        return true;
    }

    function checkCorrectness(event){
        let textValue = event.target.value;
        if (!isValidUsername(textValue)){
            setResponse("Username is not valid. A username must be between 1-32 characters and have only alphanumeric lowercase characters");
        }
        else{
            setResponse("");
            props.func(event.target.value);
        }
    }

    return (
        <div id = "SignUpUsername">
            <p className = "signUpSectionTitle">Username</p>
            <p className = "signUpSectionDescription">The name for new friends to find you by</p>
            <input className = "signUpTextInput" type = "text" onChange = {checkCorrectness}/>
            <p>{response}</p>
        </div>
    );
}

export default SignUpUsername;
