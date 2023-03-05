import "../../css/Shared/form.css";
const FriendSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.friendReact}>
                <option value = "Unfriend">Unfriend</option>
                <option value = "Block">Block</option>
            </select>
        </div>
    )
}

export default FriendSelect;