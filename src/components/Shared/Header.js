import PageSwitch from "./PageSwitch";
import UserSettingsButton from "./UserSettingsButton";
import "../../css/Shared/header.css";
const Header = (props) => {
    let title = props.children.title;
    let pageSwitchType = props.children.type;

    return (
        <div id = "Header">
            <h1>{title}</h1>
            {
            (pageSwitchType !== "none" && pageSwitchType !== "league")
            ?
            <PageSwitch type = {pageSwitchType}></PageSwitch>
            :
            <></>
            }
            {
            (pageSwitchType !== "none" && pageSwitchType === "league")
            ?
            <PageSwitch type = {pageSwitchType} leaugeID = {props.children.leagueID}></PageSwitch>
            :
            <></>
            }
            <UserSettingsButton></UserSettingsButton>
        </div>
    )
}

export default Header;