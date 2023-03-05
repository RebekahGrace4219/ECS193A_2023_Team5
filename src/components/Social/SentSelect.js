import "../../css/Shared/form.css";
const SentSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onSelect = {props.friendReact}>
                <option value = "revoke">Revoke Request</option>
                <option value = "block">Block</option>
            </select>
        </div>
    )
}

export default SentSelect;