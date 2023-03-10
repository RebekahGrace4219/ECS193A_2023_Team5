
import '../../css/Shared/button.css';

const AddChallengeButton = () => {
    function moveToAddForm(){
        window.location.href = "/addChallengePage";
    }
    return (<button className = "addButton" onClick = {moveToAddForm}><img className = "addButtonIcon" src = "https://i.imgur.com/hzH7hdK.png"/></button>)
}

export default AddChallengeButton;