import BarButton from "../Shared/BarButton";

import "../../css/Shared/bar.css";

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
    <div className = "bar">
        <BarButton function = {setIssued} name = "All"></BarButton>
        <BarButton function = {setSent} name = "Sent"></BarButton>
        <BarButton function = {setReceived} name = "Received"></BarButton>
    </div>
    );
}

export default CurrentChallengeBar;