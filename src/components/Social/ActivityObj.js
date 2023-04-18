const ActivityObj = (props) => {
    const createURL = (username) => {
        return "https://res.cloudinary.com/dtsw9d8om/image/upload/profilePictures/"+username.replace("#", "_") + ".png";
    }
    let username = props.children.username;
    let exerciseName = props.children.exercise.exerciseName;
    let progress = props.children.exercise.amount;
    let unit = props.children.exercise.unit;
    let picture = props.children.picture;
    let date = props.children.loggedDate.split("T")[0];
    return (
        <div id = "ActivityObj">
            <div id = "ActivityLeftSide">
                <img id = "activityProfilePhoto" src = {createURL(username)}></img>
                <p className = "activityObjText">{username} did {exerciseName} {progress} {unit} on {date}</p>
            </div>
        </div>
    );
}

export default ActivityObj;