import "../../css/Shared/form.css";
const BlockedSelect = (props) => {

    return(
        <div>
            <select className = "formSelect" onChange = {props.friendReact}>
                <option value = "Unblock">Unblock</option>
            </select>
        </div>
    )
}

export default BlockedSelect;