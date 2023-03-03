import FriendBar from './FriendBar';
import FriendScroll from './FriendScroll';
import FriendAdd from './FriendAdd';
import {useState, useEffect} from 'react';
const FriendSection = (props) => {
    const [friendState, setFriendState] = useState("friend");

    return (
    <div id = "FriendSection">
        <div>
            <h2>Friends</h2>
            <FriendBar func = {setFriendState}></FriendBar>
        </div>
        { (friendState === "friend") ? <FriendScroll type = "friend"></FriendScroll> : <></>}
        { (friendState === "sent") ? <FriendScroll type = "sent"></FriendScroll> : <></>}
        { (friendState === "received") ? <FriendScroll type = "received"></FriendScroll> : <></>}
        { (friendState === "blocked") ? <FriendScroll type = "blocked"></FriendScroll> : <></>}
        { (friendState === "add") ? <FriendAdd></FriendAdd> : <></>}
    </div>
    )
}

export default FriendSection;