import PageSwitch from "../Shared/PageSwitch";
import "../../css/Social/socialHeader.css";
const SocialHeader = (props) => {
    return (
    <div id = "SocialHeader">
        <h1>Social Hub</h1>
        {
            (props.children.type === "social") ?
            <PageSwitch type = "social"></PageSwitch>
            :
            <></>
        }
                {
            (props.children.type === "league") ?
            <PageSwitch type = "league" leagueID = {props.children.leagueID}></PageSwitch>
            :
            <></>
        }

    </div>
    )
}

export default SocialHeader;