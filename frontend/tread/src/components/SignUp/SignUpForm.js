import SignUpPhoto from "./SignUpPhoto";
import SignUpDisplayName from "./SignUpDisplayName";
import SignUpUsername from "./SignUpUsername";
import SignUpButton from "./SignUpButton";
import '../../css/SignUp/SignUpForm.css';
const SignUpForm = () => {
    return (
        <div id = "SignUpForm">
            <p id = "title">Tread</p>
            <p id = "subtitle">Looks like you're new here</p>
            <SignUpPhoto></SignUpPhoto>
            <SignUpDisplayName></SignUpDisplayName>
            <SignUpUsername></SignUpUsername>
            <SignUpButton></SignUpButton>
        </div>);
}
export default SignUpForm;