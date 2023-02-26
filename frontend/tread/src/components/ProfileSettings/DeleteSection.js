import '../../css/Shared/shared.css'
import '../../css/ProfileSettings/DeleteSection.css';
import DeletePopUp from './DeletePopUp';
const DeleteSection = () => {

    return (
        <div id = "DeleteSection">
            <h2>Delete Account</h2><p>
            <span className = "greenBaseText">This will </span>
            <span className = "redBaseText">permanently delete</span>
            <span className = "greenBaseText"> your account. You will </span>
            <span className = "redBaseText">lose</span>
            <span className = "greenBaseText"> all your friends, leagues, and medals. All your insights will be gone with no way to recover them. </span></p>
            <DeletePopUp> <span> Modal content </span></DeletePopUp>

        </div>
    )
}

export default DeleteSection;