import {useState} from "react";
const DisplayNameForm = (props) => {
    const [displayError, setDisplayError] = useState("");

    function validateDisplayName(event) {
        let displayNameInput = event.target.value;
        if (displayNameInput.length === 0 || displayNameInput.length > 32) {
            setDisplayError("Cannot sign up, display name between 1-32 characters");
            props.updateDisplayName("");
            return false;
        }

        if (!(/^[a-z0-9 ]+$/i.test(displayNameInput))) {
            setDisplayError("Display Name input must only have alphanumeric and spaces");
            props.updateDisplayName("");
            return false;
        }

        setDisplayError("");
        props.updateDisplayName(displayNameInput);
        return true;
    }

    return (
        <div>
            <h1>Display Name</h1>
            <p className="formObjInner">This is what others will see.</p>
            <input className="formTextInput" type="text" placeholder = {props.placeholder} onChange={validateDisplayName} />
            <p className="errorBox">{displayError}</p>
        </div>
    );
}

export default DisplayNameForm;