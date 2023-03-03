
import '../../css/Challenge/AddChallengeButton.css';

const AddChallengeButton = () => {
    function moveToAddForm(){
        window.location.href = "/addChallengePage";
    }
    return (<button id = "AddChallengeButton" onClick = {moveToAddForm}><img id = "icon" src = "https://i.imgur.com/hzH7hdK.png"/></button>)
}

export default AddChallengeButton;