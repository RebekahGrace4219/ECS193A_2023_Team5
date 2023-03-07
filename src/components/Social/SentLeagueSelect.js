import "../../css/Shared/form.css";
const SentLeagueSelect = (props) => {
    return(
        <div>
            <select className = "formSelect" onChange = {props.leagueReact}>
            <option value="none" selected disabled hidden>Select an Option</option>
                <option value = "revoke">Revoke request</option>
            </select>
        </div>
    )

}

export default SentLeagueSelect;