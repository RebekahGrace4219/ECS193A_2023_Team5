import BarButton from "../Shared/BarButton";
import "../../css/Shared/bar.css";

const LeagueBar = (props) => {
    function setLeague(){
        props.func("league");
    }

    function setSent(){
        props.func("sent");
    }

    function setOwner(){
        props.func("owner");
    }

    function setAdmin(){
        props.func("admin");
    }

    function setInvite(){
        props.func("invite");
    }




    return (
        <div id = "LeagueBar" className="bar">
            <BarButton function = {setLeague} name = "All"></BarButton>
            <BarButton function = {setOwner} name = "Owner"></BarButton>
            <BarButton function = {setAdmin} name = "Admin"></BarButton>
            <BarButton function = {setSent} name = "Sent"></BarButton>
            <BarButton function = {setInvite} name = "Invites"></BarButton>
        </div>
        )
}

export default LeagueBar;