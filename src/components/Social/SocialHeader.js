import PageSwitch from "../Shared/PageSwitch";
import "../../css/Social/socialHeader.css";
const SocialHeader = (props) => {
    return (
    <div id = "SocialHeader">
        <h1>Social Hub</h1>
        {
            (props.children.type === "button") ?
            <PageSwitch type = "social"></PageSwitch>
            :
            <></>
        }

    </div>
    )
}

export default SocialHeader;