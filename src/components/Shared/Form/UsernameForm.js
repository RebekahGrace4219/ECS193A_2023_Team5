import {useState} from "react";
const UsernameForm = (props) => {
    const [usernameError, setUsernameError] = useState("");
    function validateUsername(event){
        let usernameInput = event.target.value;
        if (usernameInput.length === 0 || usernameInput.length > 32){
            setUsernameError("Cannot sign up, username needs to be between 1-32 characters");
            props.updateUsername("");
            return false;
        }

        if (!(/^[a-z0-9]+$/i.test(usernameInput))) {
            setUsernameError("Cannot sign up, username should be alphanumeric");
            props.updateUsername("");
            return false;
        }

        setUsernameError("");
        props.updateUsername(usernameInput);
    }

    return (
        <div className="formObj">
                <h1>Username</h1>
                <p className="formObjInner">This is a public, but unique identifier to you.</p>
                <input className="formTextInput" type = "text"  onChange = {validateUsername}/>
                <p className = "errorBox">{usernameError}</p>
        </div>
    )
}

export default UsernameForm;