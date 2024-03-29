import "../../css/Shared/form.css";

const ReceivedSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.friendReact}>
                <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "Accept">Accept</option>
                <option value = "Decline">Decline</option>
                <option value = "Block">Block</option>
            </select>
        </div>
    )
}

export default ReceivedSelect;