import "../../css/Shared/form.css"
const LeagueSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
                <option value = "leave">Leave League</option>
            </select>
        </div>
    );
}

export default LeagueSelect;