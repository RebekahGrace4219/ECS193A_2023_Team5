
const LeagueSelect = (props) => {
    return(
        <div>
            <select onChange = {props.leagueReact}>
                <option value = "leave">Leave League</option>
            </select>
        </div>
    );
}

export default LeagueSelect;