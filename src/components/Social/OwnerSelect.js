import "../../css/Shared/form.css";

const OwnerSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
            <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "delete">Delete League</option>
            </select>
        </div>
    )

}

export default OwnerSelect;