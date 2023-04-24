import {createProfilePictureURL} from "../../Helpers/CloudinaryURLHelpers";

const ActivityObj = (props) => {
    let username = props.children.username;
    let exerciseName = props.children.exercise.exerciseName;
    let progress = props.children.exercise.amount;
    let unit = props.children.exercise.unit;
    let date = props.children.loggedDate.split("T")[0];
    return (
        <div id = "ActivityObj">
            <div id = "ActivityLeftSide">
                <img id = "activityProfilePhoto" src = {createProfilePictureURL(username)} alt = "profile"></img>
                <p className = "activityObjText">{username} did {exerciseName} {progress} {unit} on {date}</p>
            </div>
        </div>
    );
}

export default ActivityObj;