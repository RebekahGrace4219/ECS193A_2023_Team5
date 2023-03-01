import FriendBar from './FriendBar';
import FriendScroll from './FriendScroll';

const FriendSection = (props) => {
    return (
    <div>
        <div>
            <h2>Friends</h2>
            <FriendBar></FriendBar>
        </div>

        <FriendScroll></FriendScroll>
    </div>
    )
}

export default FriendSection;