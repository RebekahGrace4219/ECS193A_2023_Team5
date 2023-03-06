import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";

const MembersBar = (props) => {
    function setAll(){
        props.changeFunction("all");
    }

    function setPending(){
        props.changeFunction("pending");
    }

    function setBanned(){
        props.changeFunction("banned");
    }


    return (
        <div className = "bar">
            <BarButton function = {setAll} name = "All"></BarButton>
            <BarButton function = {setPending} name = "Pending"></BarButton>
            <BarButton function = {setBanned} name = "Banned"></BarButton>
        </div>
        );

}
export default MembersBar;