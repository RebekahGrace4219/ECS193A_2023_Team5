import BarButton from "../Shared/BarButton";

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


    return (
        <div id = "LeagueBar">
            <BarButton function = {setLeague} name = "All"></BarButton>
            <BarButton function = {setOwner} name = "Owner"></BarButton>
            <BarButton function = {setAdmin} name = "Admin"></BarButton>
            <BarButton function = {setSent} name = "Sent"></BarButton>
        </div>
        )
}

export default LeagueBar;