const ActivityObj = (props) => {
    let displayName = props.children.displayName;
    let progress = (props.children.type === "progress") ? ("made progress") : ("completed");
    let challengeType = props.children.challengeType;
    let time = props.children.time;
    let challengeTitle = props.children.challengeTitle;

    return (
        <div>
            <img src = "https://i.imgur.com/jJaPs4q.png"></img>
            <p>{displayName} {progress} on a {challengeType} Challenge - {challengeTitle}</p>
            <p>{time}</p>
        </div>
    );
}

export default ActivityObj;