import '../../css/Shared/button.css'
const AcceptChallengeButton = (props) => {
    function onAccept(){
    }

    return(
        <button id = "AcceptButton" className = "circleButton" onClick = {onAccept}>
            <img className = "circleButtonInner" src ="https://i.imgur.com/w1FwIdu.png"/>
        </button>
    );
}

export default AcceptChallengeButton;