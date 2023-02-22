import '../../css/Shared/shared.css';
import '../../css/ProfileSettings/EditDisplayNameSection.css';

const EditDisplayNameSection = (props) => {
    function updateDisplayName(event){
        props.func(event.target.value);
    }
    return (
        <div id = "EditDisplayNameSection">
            <h2>Edit Display Name</h2>
            <input className = "signUpTextInput" type = "text" onChange = {updateDisplayName}/>
        </div>
    )
}

export default EditDisplayNameSection;