import '../../css/Shared/header.css'
import '../../css/Shared/coloredText.css';
import '../../css/Shared/button.css';
const DeleteSection = () => {

    function deleteAccount(){
        //TODO: send request to delete user account
    }
    return (
        <div id = "DeleteSection">
            <h2>Delete Account</h2><p>
            <span className = "greenBaseText">This will </span>
            <span className = "redBaseText">permanently delete</span>
            <span className = "greenBaseText"> your account. You will </span>
            <span className = "redBaseText">lose</span>
            <span className = "greenBaseText"> all your friends, leagues, and medals. All your insights will be gone with no way to recover them. </span></p>
            <button className = "DeleteButton" onClick = {deleteAccount}>Delete</button>

        </div>
    )
}

export default DeleteSection;