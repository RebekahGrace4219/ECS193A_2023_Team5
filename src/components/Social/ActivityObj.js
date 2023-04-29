import {createProfilePictureURL} from "../../Helpers/CloudinaryURLHelpers";
import "../../css/Shared/coloredText.css";
const ActivityObj = (props) => {
    let username = props.children.username;
    let exerciseName = props.children.exercise.exerciseName;
    let progress = props.children.exercise.amount;
    let unit = props.children.exercise.unit;
    let date = props.children.loggedDate.split("T")[0];
    return (
        <div className = "ItemsRecentObj">
            <img className= "ItemsProfilePhoto" src = {createProfilePictureURL(username)} alt = "profile"></img>
            <p className = "greenBaseText ItemsObjText">{username} did {exerciseName} {progress} {unit} on {date}</p>
        </div>
    );
}

export default ActivityObj;