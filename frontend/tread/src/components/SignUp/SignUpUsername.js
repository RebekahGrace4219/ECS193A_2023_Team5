import "../../css/Shared/shared.css"
import "../../css/SignUp/SignUpUsername.css"
const SignUpUsername = () => {
    let response = "";
    return (
        <div id = "SignUpUsername">
            <p className = "signUpSectionTitle">Username</p>
            <p className = "signUpSectionDescription">The name for new friends to find you by</p>
            <input className = "signUpTextInput" type = "text"/>
            <p>{response}</p>
        </div>
    );
}

export default SignUpUsername;
