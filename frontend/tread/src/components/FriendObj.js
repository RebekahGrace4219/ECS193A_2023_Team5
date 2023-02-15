import "../css/friendObj.css"

const FriendObj = (props) => {
    console.log(props);
    return (
        <div className = "friendObjClass">
            <div className = "imgPortion">
                <div className = "imgClass"><img id = "profileImage" src = "https://i.imgur.com/XY9rcVx.png"/></div>
            </div>
            <div className = "namingPortion">
                <div id = "displayNameFriend">{props.children.displayName}</div>
            </div>
            <div className = "morePortion">
                <img id = "moreImage" src= "https://i.imgur.com/pnzihUp.png" alt = "three dots"></img>
            </div>


        </div>
    );
}


export default FriendObj;