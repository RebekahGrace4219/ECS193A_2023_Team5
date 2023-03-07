import "../../css/Shared/form.css";
const AdminSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
            <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "remove">Remove self as Admin</option>
                <option value = "leave">Leave League</option>
            </select>
        </div>
    )
}

export default AdminSelect;