import "../../css/Shared/form.css";

const InviteSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
            <option value="none" selected disabled hidden>Select an Option</option>
            <option value = "accept">Accept Invite</option>
            <option value = "decline">Decline Invite</option>
            </select>
        </div>
    )

}

export default InviteSelect;