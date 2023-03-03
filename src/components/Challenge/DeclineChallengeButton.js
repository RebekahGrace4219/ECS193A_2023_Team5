import '../../css/Shared/circleButton.css'
const DeclineChallengeButton = (props) => {
    function onDecline(){
    }

    return(
        <button id = "DeclineButton" className = "circleButton" onClick = {onDecline}>
            <img src ="https://i.imgur.com/4e8Io40.png"/>
        </button>
    );
}

export default DeclineChallengeButton;