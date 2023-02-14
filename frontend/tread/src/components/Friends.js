import "../css/friends.css"
import FriendObj from "./FriendObj";

const Friends = () => {

    return (
        <div id = "FriendObj">
            <p id = "friendsTitle">Your Friends</p>
            <div><input id = "friendsTextInput" type = "text"></input></div>
            <div className = "FriendSection">
                <FriendObj profilePicture = "https://i.imgur.com/XY9rcVx.png" displayName = "Clark Kent" username = "Superman#4579"></FriendObj>
                <FriendObj profilePicture = "https://i.imgur.com/XY9rcVx.png" displayName = "J'onn J'onzz" username = "MartianManhunter#4567"></FriendObj>
                <FriendObj profilePicture = "https://i.imgur.com/XY9rcVx.png" displayName = "Diana Prince" username = "WonderWoman#4569"></FriendObj>
                <FriendObj profilePicture = "https://i.imgur.com/XY9rcVx.png" displayName = "Barry Allen" username = "Flash#4578"></FriendObj>
                <FriendObj profilePicture = "https://i.imgur.com/XY9rcVx.png" displayName = "Bruce Wayne" username = "Batman#2456"></FriendObj>
                <FriendObj profilePicture = "https://i.imgur.com/XY9rcVx.png" displayName = "John Stewart" username = "GreenLatern#2456"></FriendObj>
            </div>
        </div>
    );
}


export default Friends;