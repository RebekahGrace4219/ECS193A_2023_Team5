const ActivityObj = (props) => {
    let displayName = props.children.displayName;
    let progress = (props.children.type === "progress") ? ("made progress") : ("completed");
    let challengeType = props.children.challengeType;
    let time = props.children.time;
    let challengeTitle = props.children.challengeTitle;
    let photo = props.children.photo;
    return (
        <div id = "ActivityObj">
            <div id = "ActivityLeftSide">
                <img id = "activityProfilePhoto" src = {photo}></img>
                <p className = "activityObjText">{displayName} {progress} on a {challengeType} Challenge - {challengeTitle}</p>
            </div>
            <p>{time}</p>
        </div>
    );
}

export default ActivityObj;