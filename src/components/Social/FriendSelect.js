import "../../css/Shared/form.css";

const FriendSelect = (props) => {

    return(
        <div>
            <select className = "formSelect" onChange = {props.friendReact} defaultValue="none">
                <option value="none" disabled hidden></option>
                { props.type === "friend"  ? <option value = "Unfriend">Unfriend</option> : <></>}
                { (props.type === "friend" || props.type === "sent" || props.type === "received")  ? <option value = "Block">Block</option> : <></>}
                { (props.type === "sent")  ? <option value = "revoke">Revoke Request</option> : <></>}
                { (props.type === "received")  ? <option value = "Accept">Accept</option> : <></>}
                { (props.type === "received")  ? <option value = "Decline">Decline</option> : <></>}
                { (props.type === "blocked")  ? <option value = "Unblock">Unblock</option> : <></>}
            </select>
        </div>
    )
}

export default FriendSelect;