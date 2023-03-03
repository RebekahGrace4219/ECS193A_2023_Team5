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
            <BarButton function = {setFriend} name = "All"></BarButton>
            <BarButton function = {setSent} name = "Sent"></BarButton>
            <BarButton function = {setReceived} name = "Received"></BarButton>
            <BarButton function = {setBlocked} name = "Blocked"></BarButton>
            <BarButton function = {setAdd} name = "Add Friend"></BarButton>
        </div>
    )

}

export default FriendBar;