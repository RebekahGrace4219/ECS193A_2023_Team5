import BarButton from "../Shared/BarButton";

const FriendBar = (props) => {
    function setFriend(){
        props.func("friend");
    }

    function setSent(){
        props.func("sent");
    }

    function setReceived(){
        props.func("received");
    }

    function setBlocked(){
        props.func("blocked");
    }

    function setAdd(){
        props.func("add");
    }

    return (
        <div id = "FriendBar">
            <BarButton func = {setFriend} name = "All"></BarButton>
            <BarButton func = {setSent} name = "Sent"></BarButton>
            <BarButton func = {setReceived} name = "Received"></BarButton>
            <BarButton func = {setBlocked} name = "Blocked"></BarButton>
            <BarButton func = {setAdd} name = "Add Friend"></BarButton>
        </div>
    )

}

export default FriendBar;