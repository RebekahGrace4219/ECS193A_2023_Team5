
const AdminSelect = (props) => {
    return(
        <div>
            <select onChange = {props.leagueReact}>
                <option value = "remove">Remove self as Admin</option>
                <option value = "leave">Leave League</option>
            </select>
        </div>
    )
}

export default AdminSelect;