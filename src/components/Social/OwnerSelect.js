import "../../css/Shared/form.css";
const OwnerSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
                <option value = "delete">Delete League</option>
            </select>
        </div>
    )

}

export default OwnerSelect;