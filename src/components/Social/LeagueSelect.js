import "../../css/Shared/form.css"
const LeagueSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
            <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "leave">Leave League</option>
            </select>
        </div>
    );
}

export default LeagueSelect;