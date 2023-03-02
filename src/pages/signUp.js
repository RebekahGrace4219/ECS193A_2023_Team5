import "../css/SignUp/SignUp.css"

import SignUpSideBar from "../components/SignUp/SignUpSideBar";
import SignUpForm from "../components/SignUp/SignUpForm";
const SignUp = () => {
    // const token = window.sessionStorage.getItem("token_credential")
    // console.log('Hit sign up page');
    // console.log(token);
    return (
        <div id = "SignUp">
            <SignUpSideBar id = "SignUpBar"/>
            <SignUpForm id = "SignUpForm"/>
        </div>
    );
}

export default SignUp;