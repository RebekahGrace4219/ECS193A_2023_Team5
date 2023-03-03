
const SentLeagueSelect = (props) => {
    return(
        <div>
            <select onChange = {props.leagueReact}>
                <option value = "revoke">Revoke request</option>
            </select>
        </div>
    )

}

export default SentLeagueSelect;