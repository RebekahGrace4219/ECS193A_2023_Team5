import "../css/friendObj.css"

const FriendObj = (props) => {

    return (
        <div className = "friendObjClass">
            <div className = "imgPortion">
                <div className = "imgClass"><img id = "profileImage" src = {props.profilePicture}/></div>
            </div>
            <div className = "namingPortion">
                <div id = "displayNameFriend">{props.displayName}</div>
                <div id = "usernameFriend">{props.username}</div>
            </div>
            <div className = "morePortion">
                <img id = "moreImage" src= "https://i.imgur.com/pnzihUp.png" alt = "three dots"></img>
            </div>


        </div>
    );
}


export default FriendObj;