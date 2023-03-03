import FriendObj from './FriendObj';
import {useState,useEffect} from 'react';
const FriendScroll = (props) => {
    let [scrollType] = useState(props.type);
    let [information, setInformation] = useState([]);

    function getFriends(){
        // get Friends
        setInformation([{"displayName":"See Friends", "username":"Batman", "profilePicture": "https://i.imgur.com/jJaPs4q.png"}]);
    }

    function getSent(){
        // get Sents
        setInformation([{"displayName":"Sent Requests", "username":"Batman", "profilePicture": "https://i.imgur.com/jJaPs4q.png"}]);
    }

    function getReceived(){
        // get Received
        setInformation([{"displayName":"Received Requests", "username":"Batman", "profilePicture": "https://i.imgur.com/jJaPs4q.png"}]);
    }

    function getBlocked(){
        // get Blocked
        setInformation([{"displayName":"Blocked Friends", "username":"Batman", "profilePicture": "https://i.imgur.com/jJaPs4q.png"}]);
    }

    function makeFriendObj(input){
        return (<FriendObj type = {scrollType}>{input}</FriendObj>);
    }

    useEffect (
        () => {
            if(scrollType === "friend"){
                getFriends();
            }
            else if(scrollType === "sent"){
                getSent();
            }
            else if(scrollType === "received"){
                getReceived();
            }
            else if(scrollType === "blocked"){
                getBlocked();
            }
        }, [scrollType]
    );

    return(
        <div id = "FriendScroll">
            {information.map(makeFriendObj)}
        </div>
    )
}

export default FriendScroll;