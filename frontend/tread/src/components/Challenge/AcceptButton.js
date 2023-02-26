import '../../css/Shared/circleButton.css'
const AcceptButton = (props) => {
    function onAccept(){
        console.log(props.challengeID);
    }

    return(
        <button id = "AcceptButton" className = "circleButton" onClick = {onAccept}>
            <img src ="https://i.imgur.com/w1FwIdu.png"/>
        </button>
    );
}

export default AcceptButton;