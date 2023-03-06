import '../../css/Shared/button.css'
const DeleteChallengeButton = (props) => {
    function onDelete(){
    }

    return(
        <button id = "DeleteButton" className = "circleButton" onClick = {onDelete}>
            <img className = "circleButtonInner" src ="https://i.imgur.com/WgGT2MJ.png"/>
        </button>
    );
}

export default DeleteChallengeButton;