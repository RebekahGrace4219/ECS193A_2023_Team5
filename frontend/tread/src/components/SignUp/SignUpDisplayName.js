import "../../css/Shared/shared.css"
import "../../css/SignUp/SignUpDisplayName.css"
const SignUpDisplayName = (props) => {
    function updateDisplayName(event){
        props.func(event.target.value);
    }
    return (
        <div id = "SignUpDisplayName">
            <p className = "signUpSectionTitle">Display Name</p>
            <p className = "signUpSectionDescription">The name everyone can see</p>
            <input className = "signUpTextInput" type = "text" onChange = {updateDisplayName}/>
        </div>
    );
}

export default SignUpDisplayName;
