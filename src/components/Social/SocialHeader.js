import PageSwitch from "../Shared/PageSwitch";

const SocialHeader = (props) => {
    return (
    <div id = "Social Header">
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