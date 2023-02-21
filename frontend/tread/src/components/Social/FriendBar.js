import '../css/friendBar.css';
import BarButton from './Shared/BarButton';
const FriendBar = (props) => {

    return (
        <div id = "friendBar">
            <p id = "friendsTitle">Your Friends</p>
            <BarButton name = "All" function = {props.allButton}></BarButton>
            <BarButton name = "Pending" function = {props.pendingButton}></BarButton>
            <BarButton name = "Blocked" function = {props.blockedButton}></BarButton>
            <BarButton name = "Add Friend" function = {props.addFriendButton}></BarButton>
        </div>
    );
}

export default FriendBar;