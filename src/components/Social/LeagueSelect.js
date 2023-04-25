import "../../css/Shared/form.css";

const LeagueSelect = (props) => {
    let role = props.role;
    let type = props.type;
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact} defaultValue = "none">
            <option value="none" disabled hidden></option>
            {(role === "admin" || role === "participant") ? <option value = "leave">Leave League</option> : <></>}
            {(role === "owner") ? <option value = "delete">Delete League</option> : <></>}
            {(role === "admin") ? <option value = "remove">Remove Self as Admin</option> : <></>}
            {(type === "sent") ? <option value = "revoke">Revoke request</option> : <></>}
            {(type === "invite") ? <option value = "accept">Accept Invite</option> : <></>}
            {(type === "invite") ?<option value = "decline">Decline Invite</option> : <></>}
            </select>
        </div>
    );
}

export default LeagueSelect;