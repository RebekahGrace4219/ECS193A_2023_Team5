import "../../css/Shared/form.css";

const SentSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.friendReact}>
                <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "revoke">Revoke Request</option>
                <option value = "block">Block</option>
            </select>
        </div>
    )
}

export default SentSelect;