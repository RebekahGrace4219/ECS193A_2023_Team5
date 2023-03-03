
const BlockedSelect = (props) => {

    return(
        <div>
            <select onChange = {props.friendReact}>
                <option value = "Unblock">Unblock</option>
            </select>
        </div>
    )
}

export default BlockedSelect;