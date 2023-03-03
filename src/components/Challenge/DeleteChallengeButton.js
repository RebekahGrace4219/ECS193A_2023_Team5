import '../../css/Shared/circleButton.css'
const DeleteChallengeButton = (props) => {
    function onDelete(){
    }

    return(
        <button id = "DeleteButton" className = "circleButton" onClick = {onDelete}>
            <img src ="https://i.imgur.com/WgGT2MJ.png"/>
        </button>
    );
}

export default DeleteChallengeButton;