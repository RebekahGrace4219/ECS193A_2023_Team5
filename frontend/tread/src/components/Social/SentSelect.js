
const SentSelect = (props) => {
    return(
        <div>
            <select onSelect = {props.friendReact}>
                <option value = "revoke">Revoke Request</option>
                <option value = "block">Block</option>
            </select>
        </div>
    )
}

export default SentSelect;