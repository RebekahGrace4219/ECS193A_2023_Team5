import "../../css/Shared/form.css";

const BlockedSelect = (props) => {

    return(
        <div>
            <select className = "formSelect" onChange = {props.friendReact}>
                <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "Unblock">Unblock</option>
            </select>
        </div>
    )
}

export default BlockedSelect;