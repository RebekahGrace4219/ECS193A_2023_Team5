import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";
const MedalsBar = (props) => {
    function setEarned(){
        props.changeFunction(true);
    }

    function setInProgress(){
        props.changeFunction(false);
    }

    return (
    <div className = "bar">
        <BarButton function = {setEarned} name = "Earned"></BarButton>
        <BarButton function = {setInProgress} name = "In Progress"></BarButton>
    </div>
    );
}

export default MedalsBar;