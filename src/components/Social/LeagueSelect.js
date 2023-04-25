import "../../css/Shared/form.css";
import "../../css/Shared/dropDown.css";
const LeagueSelect = (props) => {
    let role = props.role;
    let type = props.type;
    return(
        <div>
            <select className = "dropdown" onChange = {props.leagueReact} defaultValue = "none">
            <option className = "dropdownItem" value="none" disabled hidden></option>
            {(role === "admin" || role === "participant") ? <option  className = "dropdownItem" value = "leave">Leave League</option> : <></>}
            {(role === "owner") ? <option  className = "dropdownItem" value = "delete">Delete League</option> : <></>}
            {(role === "admin") ? <option  className = "dropdownItem" value = "remove">Remove Self as Admin</option> : <></>}
            {(type === "sent") ? <option  className = "dropdownItem" value = "revoke">Revoke request</option> : <></>}
            {(type === "invite") ? <option  className = "dropdownItem" value = "accept">Accept Invite</option> : <></>}
            {(type === "invite") ?<option  className = "dropdownItem" value = "decline">Decline Invite</option> : <></>}
            </select>
        </div>
    );
}

export default LeagueSelect;