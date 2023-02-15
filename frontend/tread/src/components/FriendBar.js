import '../css/friendBar.css';
import FriendBarButton from './FriendBarButton';
const FriendBar = (props) => {

    return (
        <div id = "friendBar">
            <p id = "friendsTitle">Your Friends</p>
            <FriendBarButton name = "All" function = {props.allButton}></FriendBarButton>
            <FriendBarButton name = "Pending" function = {props.pendingButton}></FriendBarButton>
            <FriendBarButton name = "Blocked" function = {props.blockedButton}></FriendBarButton>
            <FriendBarButton name = "Add Friend" function = {props.addFriendButton}></FriendBarButton>
        </div>
    );
}

export default FriendBar;