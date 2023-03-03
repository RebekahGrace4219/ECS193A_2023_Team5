import BarButton from "../Shared/BarButton";
const MedalsBar = (props) => {
    function setEarned(){
        props.changeFunction(true);
    }

    function setInProgress(){
        props.changeFunction(false);
    }

    return (
    <div id = "MedalsBar">
        <BarButton function = {setEarned} name = "Earned"></BarButton>
        <BarButton function = {setInProgress} name = "InProgress"></BarButton>
    </div>
    );
}

export default MedalsBar;