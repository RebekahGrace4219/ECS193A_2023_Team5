import LeagueForm from "../components/Social/LeagueForm";
import SideBar from "../components/Shared/SideBar";
import "../css/Shared/page2.css";
const AddLeague = () => {
    return (
    <div id = "AddLeague" className = "Body2Part">
        <div  className = "leftSide2Part">
            <SideBar></SideBar>
        </div>
        <div className = "rightSide2Part">
            <LeagueForm></LeagueForm>
        </div>


    </div>
    );
}

export default AddLeague;