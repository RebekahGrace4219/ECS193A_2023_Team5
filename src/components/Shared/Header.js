import PageSwitch from "./PageSwitch";
import UserSettingsButton from "./UserSettingsButton";
import "../../css/Shared/header.css";
const Header = (props) => {
    let title = props.children.title;
    let pageSwitchType = props.children.type;
    let onButton = props.children.onButton;

    return (
        <div id = "Header">
            <h1>{title}</h1>
            {
            (pageSwitchType !== "none" && pageSwitchType !== "league")
            ?
            <PageSwitch type = {pageSwitchType} onButton = {onButton}></PageSwitch>
            :
            <></>
            }
            {
            (pageSwitchType !== "none" && pageSwitchType === "league")
            ?
            <PageSwitch type = {pageSwitchType} onButton = {onButton} leaugeID = {props.children.leagueID}></PageSwitch>
            :
            <></>
            }
            <UserSettingsButton></UserSettingsButton>
        </div>
    )
}

export default Header;