import BarButton from "../Shared/BarButton";
const CurrentChallengeBar = (props) => {
    function setIssued(){
        props.func("issued");
    }

    function setSent(){
        props.func("sent");
    }

    function setReceived(){
        props.func("received");
    }
    return (
    <div id = "CurrentChallengeBar">
        <BarButton function = {setIssued} name = "All"></BarButton>
        <BarButton function = {setSent} name = "Sent"></BarButton>
        <BarButton function = {setReceived} name = "Received"></BarButton>
    </div>
    );
}

export default CurrentChallengeBar;