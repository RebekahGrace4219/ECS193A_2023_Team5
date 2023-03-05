import "../../css/Shared/form.css";
const SentLeagueSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
                <option value = "revoke">Revoke request</option>
            </select>
        </div>
    )

}

export default SentLeagueSelect;